import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCoursesStudentOptionalPageRoutingModule } from './list-courses-student-optional-routing.module';

import { ListCoursesStudentOptionalPage } from './list-courses-student-optional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCoursesStudentOptionalPageRoutingModule
  ],
  declarations: [ListCoursesStudentOptionalPage]
})
export class ListCoursesStudentOptionalPageModule {}
