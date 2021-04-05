import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatablePage } from './ngx-datatable.page';

const routes: Routes = [
  {
    path: '',
    component: NgxDatatablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxDatatablePageRoutingModule {}
