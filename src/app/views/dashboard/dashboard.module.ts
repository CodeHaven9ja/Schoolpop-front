import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AuthenticatedGuard } from '../../common/guards/authenticated.guard';
import { ComponentsModule } from '../../common/components/components.module';
import { RouterModule } from '@angular/router';
import { RouteService } from '../../common/services/route.service';
import { UserService } from '../../common/services/user.service';
import { MailResolver } from '../../common/resolvers/mail-resolver';
import { WidgetsModule } from '../../common/components/widgets/widgets.module';
import { NewsService } from '../../common/services/news.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    WidgetsModule
  ],
  declarations: [DashboardComponent],
  providers:[AuthenticatedGuard, RouteService, UserService, MailResolver, NewsService]
})
export class DashboardModule { }
