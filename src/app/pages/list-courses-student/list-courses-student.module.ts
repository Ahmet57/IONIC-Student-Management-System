import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCoursesStudentPageRoutingModule } from './list-courses-student-routing.module';

import { ListCoursesStudentPage } from './list-courses-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCoursesStudentPageRoutingModule
  ],
  declarations: [ListCoursesStudentPage]
})
export class ListCoursesStudentPageModule {}
