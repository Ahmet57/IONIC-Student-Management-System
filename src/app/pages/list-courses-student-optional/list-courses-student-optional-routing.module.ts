import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesStudentOptionalPage } from './list-courses-student-optional.page';

const routes: Routes = [
  {
    path: '',
    component: ListCoursesStudentOptionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCoursesStudentOptionalPageRoutingModule {}
