import { UserListItemComponent } from './../user-list-item/user-list-item.component';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input()
  usersIdList:any[] = [];

  constructor() { }

  ngOnInit() {
    
  }

}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    UserListComponent, UserListItemComponent
  ],
  exports: [
    UserListComponent
  ],
  providers: [
    UserService
  ]
})
export class UserListModule {
  
}
