import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCoursesTeacherOptionalPageRoutingModule } from './list-courses-teacher-optional-routing.module';

import { ListCoursesTeacherOptionalPage } from './list-courses-teacher-optional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCoursesTeacherOptionalPageRoutingModule
  ],
  declarations: [ListCoursesTeacherOptionalPage]
})
export class ListCoursesTeacherOptionalPageModule {}
