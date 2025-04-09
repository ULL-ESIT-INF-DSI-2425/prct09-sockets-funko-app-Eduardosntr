import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { IUser, IUserID } from "./interfaces.js";
import { FunkoManager } from "./funkoManager.js";
import { sendRequestToServer } from "./client.js";

export const argv = yargs(hideBin(process.argv))
  .command<IUser>(
    "Add",
    "Add a Funko",
    (yargs) => {
      yargs.option("user", {
        alias: "u",
        type: "string",
        demandOption: true,
        description: "User name",
      });
      yargs.option("id", {
        alias: "i",
        type: "number",
        demandOption: true,
        description: "Funko ID",
      });
      yargs.option("name", {
        alias: "n",
        type: "string",
        demandOption: true,
        description: "Funko name",
      });
      yargs.option("description", {
        alias: "d",
        type: "string",
        demandOption: true,
        description: "Funko Description",
      });
      yargs.option("type", {
        alias: "t",
        type: "string",
        demandOption: true,
        description: "Type of the funko",
      });
      yargs.option("gender", {
        alias: "g",
        type: "string",
        demandOption: true,
        description: "Funko Genre",
      });
      yargs.option("franchise", {
        alias: "f",
        type: "string",
        demandOption: true,
        description: "Franchise of the Funko",
      });
      yargs.option("pieceNumber", {
        alias: "p",
        type: "number",
        demandOption: true,
        description: "Number of pieces",
      });
      yargs.option("exclusive", {
        alias: "e",
        type: "boolean",
        demandOption: true,
        description: "If is exclusive",
      });
      yargs.option("specialFeatures", {
        alias: "s",
        type: "string",
        demandOption: true,
        description: "Special characteristics of the Funko",
      });
      yargs.option("value", {
        alias: "v",
        type: "number",
        demandOption: true,
        description: "Value",
      });
    },
    (args) => {
      const request = {
        type: 'add',
        user: args.user,
        funko: {
          id: args.id,
          name: args.name,
          description: args.description,
          type: args.type,
          gender: args.gender,
          franchise: args.franchise,
          pieceNumber: args.pieceNumber,
          exclusive: args.exclusive,
          specialFeatures: args.specialFeatures,
          value: args.value,
        },
      };
      sendRequestToServer(request);
  }
)

  .command<IUserID>(
    "Delete",
    "Delete funko",
    (yargs) => {
      yargs.option("user", {
        alias: "u",
        type: "string",
        demandOption: true,
        description: "Nombre del usuario",
      });
      yargs.option("id", {
        alias: "i",
        type: "number",
        demandOption: true,
        description: "ID del funko",
      });
    }
    ,
  (args) => {
    const user = new FunkoManager(args.user);
    // Eliminar el Funko del usuario
    user.removeFunko(args.id);
  }
)

.demandCommand()
.help().argv;