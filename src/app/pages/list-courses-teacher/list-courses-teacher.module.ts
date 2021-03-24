import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCoursesTeacherPageRoutingModule } from './list-courses-teacher-routing.module';

import { ListCoursesTeacherPage } from './list-courses-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCoursesTeacherPageRoutingModule
  ],
  declarations: [ListCoursesTeacherPage]
})
export class ListCoursesTeacherPageModule {}
