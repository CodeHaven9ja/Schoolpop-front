import { UserService } from '../../services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SingleMailComponent } from './single-mail/single-mail.component';
import { GravatarComponent } from './gravatar/gravatar.component';
import { MailBoxItemComponent } from './mail-box-item/mail-box-item.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [SingleMailComponent, GravatarComponent, MailBoxItemComponent],
  exports: [SingleMailComponent, GravatarComponent, MailBoxItemComponent],
  providers:[UserService]
})
export class WidgetsModule { }
