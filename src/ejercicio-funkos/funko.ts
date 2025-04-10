import { IFunko } from "./interfaces.js";
import { FunkoType } from "./enum.js";
import { FunkoGenre } from "./enum.js";

/**
 * Class that represents a funko 
 */
export class Funko implements IFunko {
  /**
   * Constructor for the Funko class
   * @param id - ID of the funko
   * @param name - Name of the funko
   * @param description - Description of the funko
   * @param type - Type of the funko
   * @param genre - Genre of the funko
   * @param franchise - Franchise of the funko 
   * @param franchiseID - ID of the franchise
   * @param exclusive - Is the funko exclusive?
   * @param specialCharacteristic - Special characteristic of the funko
   * @param value - Value of the funko
   */
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
  ) {
    
  }
}