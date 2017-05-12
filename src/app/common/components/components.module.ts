import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { WidgetsModule } from './widgets/widgets.module';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

import { UserService } from '../services/user.service';
import { MailService } from '../services/mail.service';
import { FullCalendarDirective } from './full-calendar/full-calendar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WidgetsModule
  ],
  declarations: [TopNavComponent, SidebarComponent, FooterComponent, ToggleButtonComponent, FullCalendarDirective],
  exports: [TopNavComponent, SidebarComponent, FooterComponent, FullCalendarDirective],
  providers: [UserService, MailService]
})
export class ComponentsModule { }
