import { Observable } from 'rxjs/Observable';
import { UserboxConfig } from './../components/widgets/userbox/userbox.component';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/user';
import { ProfileService } from '../services/profile.service';

@Injectable()
export class UserResolve implements Resolve<User> {

  constructor(private us: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.params['id'];
    return this.us.getUser(id);
  }
}

@Injectable() 
export class UserboxConfigResolve implements Resolve<UserboxConfig> {
  user:User;
  constructor(private us: UserService, private ps:ProfileService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.params['id'];
    return this.us.getUser(id)
    .map((user:User) => {
      this.user = user;
      if (this.user.role == 'user') {
        return this.ps.getParent(user);
      } else if (this.user.role == 'parent') {
        return this.ps.getChildren(user);
      }
    })
    .flatMap((users:Observable<User[]>) => {
      console.log(users);
      let config = new UserboxConfig();
      if (this.user.role == 'parent') {
        config.title = "Children / Wards";
      } else if (this.user.role == 'user') {
        config.title = "Parents";
      }
      config.imgWidth = 50;
      config.users = users;
      return Observable.of(config);
    });
  }
}