import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridDatatablePageRoutingModule } from './grid-datatable-routing.module';

import { GridDatatablePage } from './grid-datatable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridDatatablePageRoutingModule
  ],
  declarations: [GridDatatablePage]
})
export class GridDatatablePageModule {}
