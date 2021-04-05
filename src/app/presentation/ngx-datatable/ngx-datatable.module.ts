import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgxDatatablePageRoutingModule } from './ngx-datatable-routing.module';

import { NgxDatatablePage } from './ngx-datatable.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatablePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [NgxDatatablePage]
})
export class NgxDatatablePageModule {}
