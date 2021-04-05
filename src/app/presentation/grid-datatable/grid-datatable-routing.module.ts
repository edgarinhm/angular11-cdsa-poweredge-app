import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridDatatablePage } from './grid-datatable.page';

const routes: Routes = [
  {
    path: '',
    component: GridDatatablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridDatatablePageRoutingModule {}
