import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TagInputModule } from 'ng2-tag-input';
import { CKEditorModule } from 'ng2-ckeditor';

import { MailComponent } from './mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';
import { ReadMailComponent } from './read-mail/read-mail.component';

import { UserService } from '../../common/services/user.service';
import { MailService } from '../../common/services/mail.service';
import { RouteService } from '../../common/services/route.service';

import { InboxResolve } from '../../common/resolvers/inbox-resolver';
import { MailItemResolve } from '../../common/resolvers/mail-item-resolver';
import { OutboxResolve } from '../../common/resolvers/outbox-resolver';

import { WidgetsModule } from '../../common/components/widgets/widgets.module';
import { ComposeComponent } from './compose/compose.component';
import { MailBoxItemModule } from '../../common/components/widgets/mail-box-item/mail-box-item.component';
import { ParseService } from '../../common/services/parse.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WidgetsModule,
    MailBoxItemModule,
    TagInputModule, 
    BrowserAnimationsModule,
    FormsModule,
    CKEditorModule
  ],
  declarations: [MailComponent, InboxComponent, OutboxComponent, ReadMailComponent, ComposeComponent],
  providers:[MailService, UserService, RouteService, InboxResolve, OutboxResolve, MailItemResolve, ParseService]
})
export class MailModule { }
