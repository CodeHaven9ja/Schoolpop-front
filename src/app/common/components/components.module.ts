import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { WidgetsModule } from './widgets/widgets.module';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

import { UserService } from '../services/user.service';
import { MailService } from '../services/mail.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WidgetsModule
  ],
  declarations: [FullCalendarComponent, TopNavComponent, SidebarComponent, FooterComponent, ToggleButtonComponent],
  exports:[FullCalendarComponent, TopNavComponent, SidebarComponent, FooterComponent],
  providers: [UserService, MailService]
})
export class ComponentsModule { }
