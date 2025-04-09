import { FunkoType } from "./enum.js";
import { FunkoGenre } from "./enum.js";

/**
 * Interface that represents a Funko.
 * It contains properties such as id, name, description, type, genre, franchise, exclusive, specialCharacteristic, and value.
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

/**
 * Interface that represents a user.
 * It contains properties such as user, id, name, description, type, genre, franchise, pieceNumber, exclusive, specialFeatures, and value.
 */
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
 * Interface that represents a Funko manager.
 * It contains methods to add, remove, and get Funkos.
 */
export interface IFunkoManager {
  addFunko(funko: IFunko): void;
  removeFunko(funkoId: number): void;
  getFunko(funkoId: number): IFunko | undefined;
  getAllFunkos(): IFunko[];
}

export interface IUserID {
  user: string
  id: number;
}