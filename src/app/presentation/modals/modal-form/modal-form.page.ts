import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ModalFormFacade } from './modal-form-facade';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.page.html',
  styleUrls: ['./modal-form.page.scss'],
})
export class ModalFormPage implements OnInit {

  modalObject: any;
  modalTitle: string;
  modalFormData: any;
  modalFormMetaData: any;
  modalFormOperation: any;
 
  constructor(private modalController: ModalController,private navParams: NavParams,
    private modalFormFacade: ModalFormFacade) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modalObject = this.navParams.data.paramObject; 
    this.modalTitle = this.navParams.data.paramTitle; 
    this.modalFormData = this.navParams.data.paramData;
    this.modalFormMetaData = this.navParams.data.paramMetaData;
    this.modalFormOperation = this.navParams.data.operation;
    
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  findItenByKey(key){    
    return this.modalFormData[key];

  }

  async save(form){
    let formObject=[];
    let formJsonObject={};
    for(var i = 0; i < form.length; i++){      
      formObject[form[i].name]=form[i].value;
      formJsonObject[form[i].name]=form[i].value;
    }
    
    if(this.modalFormOperation == "add"){
      (await this.modalFormFacade.add(this.modalObject, formJsonObject)).subscribe(
        (response) => {
          console.log(response);
        (error: HttpErrorResponse) => {
          
         };
       });

    }else if(this.modalFormOperation == "edit"){
      (await this.modalFormFacade.edit(this.modalObject, formJsonObject)).subscribe(
        (response) => {
          console.log(response);
        (error: HttpErrorResponse) => {
          
         };
       });
    }
    

    this.closeModal();
  }

}
