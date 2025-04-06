import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { IUser } from "./interfaces.js";
import { FunkoManager } from "./funkoManager.js";
import { FunkoType } from "./enum.js";
import { FunkoGenre } from "./enum.js";
import { Funko } from "./funko.js";

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
      // Aquí args.user ya es de tipo string gracias a la tipificación
      const user = new FunkoManager(args.user);

      // Crear una instancia de Funko
      const newFunko = new Funko(
        args.id,
        args.name,
        args.description,
        args.type as FunkoType,
        args.gender as FunkoGenre,
        args.franchise,
        args.pieceNumber,
        args.exclusive,
        args.specialFeatures,
        args.value
      );

      // Agregar el Funko al usuario
    user.add(newFunko);
  }
)
.demandCommand()
.help().argv;