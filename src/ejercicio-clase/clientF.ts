import net from "net"; 
import fs from "fs";

let outputFile = "destino/archivo2.txt"
let inputFile = "funkos/Eduardo/1.json"

  const client = net.createConnection({ port: 60300, host: "127.0.0.1" }, () => {
    console.log("Conectado al servidor.");
    client.write(inputFile);
  });

  const writeStream = fs.createWriteStream(outputFile);
  client.on('data', (dataBlock) => { 
    writeStream.write(dataBlock)
    
    writeStream.on("error", (errStream) => {
      console.error("Error: ", errStream.message);
    })
  });
  
  client.on("end", () => {
    writeStream.close()
    console.log("Desconectado del servidor.");
    client.end();
  });

  client.on('error', (err) => {
    writeStream.end();
    console.error("Error en el cliente:", err);
  });