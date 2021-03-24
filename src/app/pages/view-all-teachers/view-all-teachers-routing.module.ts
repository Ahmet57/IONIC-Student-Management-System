import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllTeachersPage } from './view-all-teachers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllTeachersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllTeachersPageRoutingModule {}
