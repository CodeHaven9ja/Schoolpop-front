import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ClassRoomComponent } from './class-room.component';
import { ClassRoomIndexComponent } from './index/index.component';
import { ClassRoomViewComponent } from './view/view.component';
import { RouteService } from '../../common/services/route.service';
import { ClassesService } from '../../common/services/classes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    RouterModule
  ],
  declarations: [ClassRoomComponent, ClassRoomIndexComponent, ClassRoomViewComponent],
  providers: [
    RouteService,
    ClassesService
  ]
})
export class ClassRoomModule { }
