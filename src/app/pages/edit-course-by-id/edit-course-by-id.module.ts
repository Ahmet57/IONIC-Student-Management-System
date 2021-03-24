import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCourseByIDPageRoutingModule } from './edit-course-by-id-routing.module';

import { EditCourseByIDPage } from './edit-course-by-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCourseByIDPageRoutingModule
  ],
  declarations: [EditCourseByIDPage]
})
export class EditCourseByIDPageModule {}
