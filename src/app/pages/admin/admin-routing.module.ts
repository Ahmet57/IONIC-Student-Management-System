import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children:[
      {
        path: 'add-student',
        loadChildren: () => import('../add-student/add-student.module').then( m => m.AddStudentPageModule)
      },
      {
        path: 'add-course',
        loadChildren: () => import('../add-course/add-course.module').then( m => m.AddCoursePageModule)
      },
      {
        path: 'add-teacher',
        loadChildren: () => import('../add-teacher/add-teacher.module').then( m => m.AddTeacherPageModule)
      },
      {
        path: 'view-all-courses',
        loadChildren: () => import('../view-all-courses/view-all-courses.module').then( m => m.ViewAllCoursesPageModule)
      },
      {
        path: 'view-all-students',
        loadChildren: () => import('../view-all-students/view-all-students.module').then( m => m.ViewAllStudentsPageModule)
      },
      {
        path: 'view-all-teachers',
        loadChildren: () => import('../view-all-teachers/view-all-teachers.module').then( m => m.ViewAllTeachersPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
