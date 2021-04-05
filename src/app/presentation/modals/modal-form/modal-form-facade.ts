import { Injectable } from "@angular/core";
import { SaveDataLogic } from "src/app/core/data/base/save-data-logic";

@Injectable({
    providedIn: 'root'
})
export class ModalFormFacade {

    constructor(        
        private saveDataLogic: SaveDataLogic
    ) {}
    
    /**
   * @description Realiza la inserccion en la base de datos de insert, update y delete
   * @param object
   * @param data
   */
  async add(object, data) {
      return this.saveDataLogic.add(object, data)
    
  }
  
  async edit(object, data) {
    return this.saveDataLogic.edit(object, data)
  
  }

}  