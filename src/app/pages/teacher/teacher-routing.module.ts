import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherPage } from './teacher.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherPage,
    children:[
      {
        path: 'edit-profile-teacher',
        loadChildren: () => import('../edit-profile-teacher/edit-profile-teacher.module').then( m => m.EditProfileTeacherPageModule)
      },
      {
        path: 'list-courses-teacher',
        loadChildren: () => import('../list-courses-teacher/list-courses-teacher.module').then( m => m.ListCoursesTeacherPageModule)
      },
      {
        path: 'list-courses-teacher-optional',
        loadChildren: () => import('../list-courses-teacher-optional/list-courses-teacher-optional.module').then( m => m.ListCoursesTeacherOptionalPageModule)
      },
      {
        path: 'edit-course-by-id',
        loadChildren: () => import('../edit-course-by-id/edit-course-by-id.module').then( m => m.EditCourseByIDPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPageRoutingModule {}
