import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TypeaheadModule, ModalModule } from 'ngx-bootstrap';

import { UserboxModule } from '../../common/components/widgets/userbox/userbox.module';
import { WidgetsModule } from '../../common/components/widgets/widgets.module';

import { ProfileService } from '../../common/services/profile.service';
import { RouteService } from '../../common/services/route.service';
import { UserService } from '../../common/services/user.service';

import { UsersComponent } from './users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersIndexComponent } from './users-index/users-index.component';

import { UserboxConfigResolve, UserResolve } from '../../common/resolvers/user-resolver';
import { TopicResolve } from '../../common/resolvers/topic.resolver';
import { TopicService } from '../../common/services/topic.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    WidgetsModule,
    UserboxModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot()
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
    UserboxConfigResolve,
    TopicResolve,
    TopicService
  ]
})
export class UsersModule { }
