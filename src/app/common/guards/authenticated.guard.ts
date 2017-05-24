import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private us:UserService, private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (Parse.User.current()) {
        console.log(Parse.User.current().get("firstName"));
        return true;
      } else {
        this.router.navigate(['/login'])
      }
  }
}
