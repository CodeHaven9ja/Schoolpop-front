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
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { ParseService } from '../../services/parse.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NewsWidgetModule,
    RouterModule,
    OwlModule
  ],
  declarations: [SingleMailComponent, GravatarComponent, NewsWidgetComponent],
  exports: [
    SingleMailComponent, 
    GravatarComponent,
    NewsWidgetComponent
  ],
  providers:[UserService, ParseService]
})
export class WidgetsModule { }
