import { FunkoType } from "./enum.js";
import { FunkoGenre } from "./enum.js";

/**
 * Interfaz que representa un Funko.
 * Contiene propiedades como ID, nombre, descripción, tipo, género, franquicia, etc.
 */
export interface IFunko {
  id: number;
  name: string;
  description: string;
  type: FunkoType;
  genre: FunkoGenre;
  franchise: string;
  franchiseID: number;
  exclusive: boolean;
  specialCharacteristic: string;
  value: number;
}


export interface  IUser {
  user: string;
  id: number;
  name: string;
  description: string;
  type: FunkoType;
  gender: FunkoGenre;
  franchise: string;
  pieceNumber: number;
  exclusive: boolean;
  specialFeatures: string;
  value: number;
}

/**
 * Interfaz que representa una colección de Funkos.
 * Contiene un array de Funkos y su tamaño.
 */
export interface IFunkoManager {
  addFunko(funko: IFunko): void;
  removeFunko(funkoId: number): void;
  getFunko(funkoId: number): IFunko | undefined;
  getAllFunkos(): IFunko[];
}




