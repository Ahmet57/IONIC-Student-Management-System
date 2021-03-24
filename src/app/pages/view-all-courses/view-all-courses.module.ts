import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllCoursesPageRoutingModule } from './view-all-courses-routing.module';

import { ViewAllCoursesPage } from './view-all-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllCoursesPageRoutingModule
  ],
  declarations: [ViewAllCoursesPage]
})
export class ViewAllCoursesPageModule {}
