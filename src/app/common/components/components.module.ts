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
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { SearchService } from '../services/search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    WidgetsModule
  ],
  declarations: [TopNavComponent, SidebarComponent, FooterComponent, ToggleButtonComponent, FullCalendarComponent],
  exports: [TopNavComponent, SidebarComponent, FooterComponent, FullCalendarComponent],
  providers: [UserService, MailService, SearchService]
})
export class ComponentsModule { }
