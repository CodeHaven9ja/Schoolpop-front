import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../common/components/components.module';
import { RouterModule } from '@angular/router';

import { ModalModule, TabsModule } from 'ngx-bootstrap';

import { WidgetsModule } from '../../common/components/widgets/widgets.module';

import { DashboardComponent } from './dashboard.component';

import { RouteService } from '../../common/services/route.service';
import { UserService } from '../../common/services/user.service';
import { NewsService } from '../../common/services/news.service';
import { EventService } from '../../common/services/event.service';

import { MailResolver } from '../../common/resolvers/mail-resolver';

import { AuthenticatedGuard } from '../../common/guards/authenticated.guard';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    ComponentsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    WidgetsModule
  ],
  declarations: [DashboardComponent],
  providers:[
    AuthenticatedGuard, 
    RouteService, 
    UserService,
    MailResolver, 
    NewsService,
    EventService
  ]
})
export class DashboardModule { }
