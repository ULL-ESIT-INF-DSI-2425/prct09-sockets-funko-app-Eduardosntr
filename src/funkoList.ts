import { IFunkoList } from "./intefaces.js";
import { Funko } from "./intefaces.js";

/**
 * Clase que representa una lista de Funkos.
 * Implementa la interfaz IFunkoList.
 */
export class FunkoList implements IFunkoList {
  private funkos: Funko[] = [];

  /**
   * Constructor de la clase FunkoList.
   * Inicializa la lista de Funkos.
   */
  constructor() {
    this.funkos = [];
  }

  /**
   * Función para agregar un Funko a la lista.
   * @param funko - El Funko a agregar.
   * @throws Error si el Funko ya existe en la lista.
   */
  addFunko(funko: Funko): void {
    if (this.funkos.some(f => f.id === funko.id)) {
      throw new Error(`Funko with ID ${funko.id} already exists.`);
    } else {
      this.funkos.push(funko);
      console.log(`Funko ${funko.name} added.`);
    }
  }

  /**
   * Función para actualizar un Funko en la lista.
   * @param funko - El Funko a actualizar.
   * @throws Error si el Funko no existe en la lista.
   */
  updateFunko(funko: Funko): void {
    const index = this.funkos.findIndex(f => f.id === funko.id);
    if (index !== -1) {
      this.funkos[index] = funko;
      console.log(`Funko ${funko.name} updated.`);
    } else {
      console.log(`Funko with ID ${funko.id} not found.`);
    }
  }

  /**
   * Función para eliminar un Funko de la lista.
   * @param id - ID del Funko a eliminar.
   */
  removeFunko(id: number): void {
    const index = this.funkos.findIndex(f => f.id === id);
    if (index !== -1) {
      this.funkos.splice(index, 1);
      console.log(`Funko with ID ${id} removed.`);
    } else {
      console.log(`Funko with ID ${id} not found.`);
    }
  }

  /**
   * Función para listar todos los Funkos en la lista.
   */
  listFunkos(): void {
    console.log("List of Funkos:");
    this.funkos.forEach(funko => {
      console.log(`ID: ${funko.id}, Name: ${funko.name}`);
    });
  }

  /**
   * Función para mostrar los detalles de un Funko específico.
   * @param id - ID del Funko a mostrar.
   */
  showFunko(id: number): void {
    const funko = this.funkos.find(f => f.id === id);
    if (funko) {
      console.log(`Funko Details: ${JSON.stringify(funko, null, 2)}`);
    } else {
      console.log(`Funko with ID ${id} not found.`);
    }
  }
}
