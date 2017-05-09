import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AuthenticatedGuard } from '../../common/guards/authenticated.guard';
import { ComponentsModule } from '../../common/components/components.module';
import { RouterModule } from '@angular/router';
import { RouteService } from '../../common/services/route.service';
import { UserService } from '../../common/services/user.service';
import { MailResolver } from '../../common/resolvers/mail-resolver';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  declarations: [DashboardComponent],
  providers:[AuthenticatedGuard, RouteService, UserService, MailResolver]
})
export class DashboardModule { }
