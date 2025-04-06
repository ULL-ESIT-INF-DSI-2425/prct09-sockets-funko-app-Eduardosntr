import path from "path";
import fs from "fs";
import chalk from "chalk";
// import { IFunkoManager } from "./interfaces.js";
import { Funko } from "./funko.js";

/**
 * Clase que representa un usuario.
 * Implementa la interfaz IUser y contiene métodos para gestionar Funkos.
 */
export class FunkoManager {
  public readonly path: string;
  public readonly user: string;

  /**
   * Crea una instancia de FunkoManager.
   * @param user - El nombre del usuario.
   */
  constructor(user: string,) {
    this.user = user;
    this.path = path.join("funkos", this.user);

    fs.access(this.path, (err) => {
      if (err) {
        fs.mkdir(this.path, { recursive: true}, (err) => {
          if (err) {
            console.error(chalk.red("Error al crear el directorio")); 
            return; 
          }
        });
      } else {
        console.log(chalk.green("Directorio creado correctamente"))
      }
    }); 
  }

  public add(newFunko: Funko): boolean {
    const fileName = path.join(this.path, `${newFunko.id}.json`);
    fs.access(fileName, (err) => {
      if (err) {
        fs.writeFile(fileName, JSON.stringify(newFunko), (err) => {
          if (err) {
            console.error(chalk.red(`Error al añadir el funko ${newFunko.name}: ${err.message}`));
            return false;
          }
          console.log(chalk.green(`Funko ${newFunko.name} añadido correctamente`));
        });
      } else {
        console.log(chalk.red("El Funko ya existe"));
        return false; 
      }
    });
    return true;
  }
}

