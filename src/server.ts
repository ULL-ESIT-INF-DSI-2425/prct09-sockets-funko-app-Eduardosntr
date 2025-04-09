import net from 'net';
import chalk from 'chalk';
import { FunkoManager } from './funkoManager.js';

const server = net.createServer((socket) => {
  console.log(chalk.green("Cliente conectado."));

  socket.on('data', (data) => {
    console.log(chalk.blue("Datos recibidos del cliente: "), data.toString());
    const request = JSON.parse(data.toString());
    const funkoManager = new FunkoManager(request.user);
    let response;
    switch (request.type) {
      case 'add':
        response = funkoManager.addFunko(request.funko);
        console.log(chalk.blue("Respuesta del servidor: "), response);
        socket.write(JSON.stringify(response));
        break;
    }
  });

  socket.on('end', () => {
    console.log(chalk.blue("Cliente desconectado."));
  }); 

  socket.on("error", (err) => {
    chalk.red("Error en el servidor: ", err);
  });
});

server.listen(60300, () => {
  console.log(chalk.blue("Servidor Funko escuchando en el puerto 60300..."));
});