import { FunkoType } from "./enum.js";
import { FunkoGenre } from "./enum.js";

/**
 * Interfaz identificable que representa un objeto con un ID, nombre, descripción,
 * tipo y género.
 */ 
export interface Identifiable {
  id: number;
  name: string;
  description: string;
  type: FunkoType;
  genre: FunkoGenre;
}

/**
 * Interfaz que representa un Funko.
 * Extiende la interfaz Identifiable.
 * Contiene propiedades adicionales como franquicia, franquiciaID, exclusivo,
 * característica especial y valor.
 */
export interface Funko extends Identifiable {
  franchise: string;
  franchiseID: number;
  exclusive: boolean;
  specialCharacteristic: string;
  value: number;
}

/**
 * Interfaz que representa una lista de Funkos.
 * Contiene métodos para agregar, actualizar, eliminar y listar Funkos.
 * También incluye un método para mostrar un Funko específico.
 */
export interface IFunkoList {
  addFunko: (funko: Funko) => void;
  updateFunko: (funko: Funko) => void;
  removeFunko: (id: number) => void;
  listFunkos: () => void;
  showFunko: (id: number) => void;
}

/**
 * Interfaz que representa un usuario.
 * Contiene el nombre del usuario y una lista de Funkos.
 */
export interface User {
  name: string;
  funkos: Funko[];
}