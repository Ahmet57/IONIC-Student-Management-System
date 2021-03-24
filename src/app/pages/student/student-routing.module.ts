import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPage } from './student.page';

const routes: Routes = [
  {
    path: '',
    component: StudentPage,
    children:[
      {
        path: 'edit-profile-student',
        loadChildren: () => import('../edit-profile-student/edit-profile-student.module').then( m => m.EditProfileStudentPageModule)
      },
      {
        path: 'list-courses-student',
        loadChildren: () => import('../list-courses-student/list-courses-student.module').then( m => m.ListCoursesStudentPageModule)
      },
      {
        path: 'list-courses-student-optional',
        loadChildren: () => import('../list-courses-student-optional/list-courses-student-optional.module').then( m => m.ListCoursesStudentOptionalPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {}
