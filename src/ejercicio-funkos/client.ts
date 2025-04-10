import chalk from "chalk";
import net from "net";


export function sendRequestToServer(request: object) : void {
  const client = net.createConnection({ port: 60300, host: "127.0.0.1" }, () => {
    console.log(chalk.blue("Conectado al servidor Funko."));
    client.write(JSON.stringify(request));
  });

  client.on('data', (data) => {
    const response = JSON.parse(data.toString());
    if (response.success) {
      console.log(chalk.green("Respuesta del servidor:"), response.message || "Sin mensaje");
    } else {
      console.log(chalk.red("Error del servidor:"), response.message || "Sin mensaje de error");
    }
    client.end();
  });
  
  client.on("end", () => {
    console.log("Desconectado del servidor.");
  });

  client.on('error', (err) => {
  console.error(chalk.red("Error en el cliente:"), err.message);
  });
}



