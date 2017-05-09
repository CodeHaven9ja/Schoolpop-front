import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToastModule, ToastOptions } from 'ng2-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AuthComponent } from './auth.component';
import { RouteService } from '../../common/services/route.service';
import { UserService } from '../../common/services/user.service';
import { CustomOption } from '../../toastr.options';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [AuthComponent],
  providers: [RouteService, UserService, { provide: ToastOptions, useClass: CustomOption }]
})
export class AuthModule { }
