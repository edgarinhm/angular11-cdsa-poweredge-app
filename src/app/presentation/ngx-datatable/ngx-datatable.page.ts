import { ModalFormPage } from './../modals/modal-form/modal-form.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataTableFacade } from './data-table-facade';


@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.page.html',
  styleUrls: ['./ngx-datatable.page.scss'],
})
export class NgxDatatablePage implements OnInit {

  @ViewChild('myTable') table: NgxDatatablePage;

  public dataTableColumns: any;
  public dataTableRows: any;
  tableStyle= "bootstrap";
  customRowClass = false;
  
  page = 0;
  resultsCount = 10;
  totalPages = 0;
  limitRowa= 10;
  footerHeight = 50;  
  offset: 0;

  objectId: any;

  /*modal*/
  dataReturned: any;


  constructor(public modalController: ModalController,  public alertController: AlertController,
    private dataTableFacade: DataTableFacade
    ) { 
    this.dataTableColumns = [
      { name: 'Id', prop:'id', type: 'text', disabled: 'true', required: 'true', hidden: 'true' },
      { name: 'Name', prop:'name', type: 'text', disabled: 'false', required: 'true', hidden: 'false' },
      { name: 'Rol', prop:'rolid', type: 'text', disabled: 'false', required: 'true', hidden: 'false'},
      { name: 'State', prop:'active', type: 'text', disabled: 'false', required: 'true', hidden: 'false'}
    ];
    this.objectId = 'User';
  }

  ngOnInit() {
    this.loadData();
    this.offset = 0;
  }

  loadData() {

    let dataTmp = this.dataTableFacade.getAll(this.objectId);

    console.log(' dataGetALL',dataTmp)

    fetch('./assets/data/users.json').then(res => res.json())
      .then(json => {        
        this.dataTableRows = json;        
      });
  }

  switchStyle(){
    if(this.tableStyle == 'dark'){
      this.tableStyle= "bootstrap";
    }else{
      this.tableStyle= "dark";
    }
  }

  getRowClass(row){

  }

  open(row){

  }

  updateFilter(filter){    
    let dataFound = this.dataTableFacade.findByName(this.objectId, filter);
    console.log(dataFound)
    //this.dataTableRows = dataFound;
  }

  onAddItem(){
    let title = "Add User";
    this.openModal(title, 'add');
  }

  onEditItem(row){
    console.log(row)
    let title = "Edit User";
    this.openModal(title,'edit', row);
  }

  onDeleteItem(row){
    console.log(row)
    let title = "Delete User";
    this.showAlert(title, '', 'Are you sure?', row);
  }

  async openModal(title, operation, data= []) {
    const modal = await this.modalController.create({
      component: ModalFormPage,
      componentProps: {        
        "paramObject": this.objectId,
        "paramTitle": title,
        "operation": operation,
        "paramData": data,
        "paramMetaData": this.dataTableColumns
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });

    return await modal.present();
  }

  showAlert(title, subTitle='' , message='', data=[]) {

    this.alertController.create({
      header: title,
      subHeader: subTitle,
      message: message,
      buttons: [{
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            let rsponse = this.dataTableFacade.delete(this.objectId, data);
            console.log(rsponse);
            this.loadData();
            this.offset = 0;
          }
        }
      ]
    }).then(res => {
      res.present();
    });    
  }
}
