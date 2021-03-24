import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesStudentPage } from './list-courses-student.page';

const routes: Routes = [
  {
    path: '',
    component: ListCoursesStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCoursesStudentPageRoutingModule {}
