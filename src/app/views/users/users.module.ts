import { ProfileService } from '../../common/services/profile.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UserViewComponent } from './user-view/user-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UserService } from '../../common/services/user.service';
import { RouteService } from '../../common/services/route.service';
import { UserboxConfigResolve, UserResolve } from '../../common/resolvers/user-resolver';
import { WidgetsModule } from '../../common/components/widgets/widgets.module';
import { UserboxModule } from '../../common/components/widgets/userbox/userbox.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    WidgetsModule,
    UserboxModule
  ],
  declarations: [
    UsersComponent, 
    UsersIndexComponent, 
    UserViewComponent
  ],
  providers: [
    RouteService, 
    UserService,
    ProfileService,
    UserResolve,
    UserboxConfigResolve
  ]
})
export class UsersModule { }
