import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesTeacherPage } from './list-courses-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: ListCoursesTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCoursesTeacherPageRoutingModule {}
