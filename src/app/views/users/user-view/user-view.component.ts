import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../common/models/user';
import { UserService } from '../../../common/services/user.service';
import { UserboxConfig } from '../../../common/components/widgets/userbox/userbox.component';
import { ProfileService } from '../../../common/services/profile.service';

@Component({
  selector: 'sp-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user:User;
  currentUser:boolean = false;
  isAdminOrTeacher:boolean = false;
  isParent:boolean = false;
  parent:User;
  userboxConfig: UserboxConfig;
  background = "";

  constructor(private route: ActivatedRoute, private us:UserService, private ps:ProfileService) { }

  ngOnInit() {
    this.user = <User>this.route.snapshot.data['user'];

    console.log(this.user);

    this.background = "url("+this.user.school.banner.url+") no-repeat"
    
    this.userboxConfig = <UserboxConfig>this.route.snapshot.data['config'];
    
    this.currentUser = this.user.objectId == this.us.currentUser.objectId;
    this.isAdminOrTeacher = this.us.currentUser.role == 'admin' || this.us.currentUser.role == 'teacher';
    
    this.isParent = this.user.role == 'parent';

    // if (this.user.role == 'user' && this.user.profile) {
    //   this.us.getUser(this.user.profile.parent.objectId).subscribe(
    //     u => this.parent = u
    //   );
    // }

    if (this.isParent) {
      // this.userboxConfig = new UserboxConfig();
      // this.userboxConfig.imgWidth = 50;
      // this.userboxConfig.title = "Children / Wards";
      // // this.ps.getChildren(this.user).subscribe(
      // //   u => console.log(u)
      // // )
      // this.userboxConfig.users = this.ps.getChildren(this.user);
    } 
  }

}
