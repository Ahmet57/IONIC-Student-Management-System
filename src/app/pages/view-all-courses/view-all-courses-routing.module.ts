import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllCoursesPage } from './view-all-courses.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllCoursesPageRoutingModule {}
