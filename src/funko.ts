import { IFunko } from "./interfaces.js";
import { FunkoType } from "./enum.js";
import { FunkoGenre } from "./enum.js";

export class Funko implements IFunko {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public type: FunkoType,
    public genre: FunkoGenre,
    public franchise: string,
    public franchiseID: number,
    public exclusive: boolean,
    public specialCharacteristic: string,
    public value: number
  ) {}
}