import fs from "fs";
import net from "net"; 

const server = net.createServer((socket) => {
  console.log("Cliente conectado")

  socket.on('data', (data) => {
    const filePath = data.toString().trim();
    console.log(`Solicitud de archivo: ${filePath}`);
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        socket.write("Error, el fichero que solicita no existe"); 
      } else {
        const readStream = fs.createReadStream(filePath);

        readStream.on("error", (errStream) => {
          console.error("Error: ", errStream.message);
          socket.write("Error, el fichero no se pudo leer");
        });

        readStream.on("data", (buffer) => {
          socket.write(buffer);
        });

        readStream.on("close", () => {
          console.log("Fin del archivo");
          socket.end();
        });
      }
    }); 
  });

  socket.on('end', () => {
    console.log("Cliente desconectado")
  }); 

  socket.on('error', (err) => {
    console.log("Error en el servidor:", err)
  })
})

server.listen(60300, () => {
  console.log("Servidor escuchando en el puerto 60300...");
});


