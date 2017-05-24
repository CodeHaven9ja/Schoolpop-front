import { Component, OnInit, Input, NgModule } from '@angular/core';
import { MomentUtil } from '../../../../moment.util';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tr',
  templateUrl: './mail-box-item.component.html',
  styleUrls: ['./mail-box-item.component.css']
})
export class MailBoxItemComponent implements OnInit {

  @Input()
  mail: Parse.Object;

  @Input("avi-width")
  avatarWidth:number;

  @Input()
  class:string = "";

  momentUtil = new MomentUtil();

  currentUser:Parse.User;

  constructor(private us: UserService) { 
    this.currentUser = us.getCurrentUser();
  }

  getCreatedAt(date) {
    return this.momentUtil.timeDateAgo(date);
  }

  ngOnInit() {
    // console.log(this.mail);
  }

}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    MailBoxItemComponent
  ],
  exports: [
    MailBoxItemComponent
  ],
  providers: [
    UserService
  ]
})
export class MailBoxItemModule {}

