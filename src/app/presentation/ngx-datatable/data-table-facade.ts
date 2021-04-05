import { Injectable } from "@angular/core";
import { SaveDataLogic } from "src/app/core/data/base/save-data-logic";
import { ConsultDataLogic } from './../../core/data/base/consult-data-logic';

@Injectable({
    providedIn: 'root'
})
export class DataTableFacade {

  constructor(        
      private saveDataLogic: SaveDataLogic,
      private consultDataLogic: ConsultDataLogic
  ) {}
      
  async delete(object, data) {
    return this.saveDataLogic.delete(object, data);
  
  }

  async findByName(object, data) {    
    return this.consultDataLogic.findBy(object, data);
  
  }

}  