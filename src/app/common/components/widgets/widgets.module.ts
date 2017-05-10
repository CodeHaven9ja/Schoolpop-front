import { NewsWidgetModule } from './news-widget/news-widget.module';
import { UserService } from '../../services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SingleMailComponent } from './single-mail/single-mail.component';
import { GravatarComponent } from './gravatar/gravatar.component';
import { MailBoxItemComponent } from './mail-box-item/mail-box-item.component';
import { NewsWidgetComponent } from './news-widget/news-widget/news-widget.component';
import { OwlModule } from './owl-carousel/owl.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NewsWidgetModule,
    OwlModule
  ],
  declarations: [SingleMailComponent, GravatarComponent, MailBoxItemComponent, NewsWidgetComponent],
  exports: [SingleMailComponent, GravatarComponent, MailBoxItemComponent, NewsWidgetComponent],
  providers:[UserService]
})
export class WidgetsModule { }
