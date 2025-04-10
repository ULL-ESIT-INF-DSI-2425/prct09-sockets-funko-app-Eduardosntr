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
      }
    }); 
  }

  /**
   * Function that adds a Funko to a user's collection.
   * @param newFunko - El nuevo funko a añadir.
   * @returns True if the funko was added successfully, false otherwise.
   */
  public addFunko(newFunko: Funko): boolean {
    const fileName = path.join(this.path, `${newFunko.id}.json`);
    fs.access(fileName, fs.constants.F_OK, (err) => {
      if (err) {
        // El archivo no existe, se puede crear
        fs.writeFile(fileName, JSON.stringify(newFunko, null, 2), (err) => {
          if (err) {
            console.error(chalk.red(`Error al añadir el funko ${newFunko.name}: ${err.message}`));
            return false;
          }
          console.log(chalk.green(`Funko ${newFunko.name} añadido correctamente`));
        });
      } else {
        // El archivo ya existe
        console.log(chalk.red(`El funko ${newFunko.name} ya existe para el usuario ${this.user}`));
        return false;
      }
    });
    return true;
  }

  /**
   * Function that removes a Funko from a user's collection.
   * @param ID - ID del funko a eliminar
   * @returns - True si se ha eliminado correctamente, false si no existe
   */
  public removeFunko(ID: number): boolean {
    const fileName = path.join(this.path, `${ID}.json`);
    fs.access(fileName, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(chalk.red(`El funko con ID ${ID} no existe para el usuario ${this.user}`));
        return false;
      }
      fs.unlink(fileName, (err) => {
        if (err) {
          console.error(chalk.red(`Error al eliminar el funko con ID ${ID}: ${err.message}`));
          return false;
        }
        console.log(chalk.green(`Funko con ID ${ID} eliminado correctamente`));
      });
    });
    return true;
  }

  /**
   * Function that modifies a Funko in a user's collection.
   * @param funkoToUpdate - Funko to modify
   * @returns 
   */
  public modifyFunko(funkoToUpdate: Funko): boolean {
    const fileName = path.join(this.path, `${funkoToUpdate.id}.json`);
    fs.access(fileName, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(chalk.red(`El funko con ID ${funkoToUpdate.id} no existe para el usuario ${this.user}`));
        return false;
      } else {
        fs.writeFile(fileName, JSON.stringify(funkoToUpdate, null, 2), (err) => {
          if (err) {
            console.error(chalk.red(`Error al modificar el funko con ID ${funkoToUpdate.id}: ${err.message}`));
            return false;
          }
          console.log(chalk.green(`Funko con ID ${funkoToUpdate.id} modificado correctamente`));
        });
      }
    }); 
    return true; 
  }
}

