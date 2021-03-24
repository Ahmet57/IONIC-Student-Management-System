import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllTeachersPageRoutingModule } from './view-all-teachers-routing.module';

import { ViewAllTeachersPage } from './view-all-teachers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllTeachersPageRoutingModule
  ],
  declarations: [ViewAllTeachersPage]
})
export class ViewAllTeachersPageModule {}
