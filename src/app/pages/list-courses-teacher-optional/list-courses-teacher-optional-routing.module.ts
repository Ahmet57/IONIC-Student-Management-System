import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesTeacherOptionalPage } from './list-courses-teacher-optional.page';

const routes: Routes = [
  {
    path: '',
    component: ListCoursesTeacherOptionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCoursesTeacherOptionalPageRoutingModule {}
