import { ClassRoomModule } from './class-room/class-room.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthModule } from './auth/auth.module';
import { LayoutsModule } from './../common/layouts/layouts.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LandingModule } from './landing/landing.module';
import { MailModule } from './mail/mail.module';
import { WidgetsModule } from '../common/components/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    AuthModule,
    DashboardModule,
    LandingModule,
    MailModule,
    WidgetsModule,
    ClassRoomModule
  ],
  declarations: []
})
export class ViewsModule { }
