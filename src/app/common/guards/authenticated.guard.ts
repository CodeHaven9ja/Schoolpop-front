import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate, CanActivateChild {
  constructor(private us:UserService, private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (Parse.User.current()) {
        this.router.navigate(['/dashboard']);
        return true;
      } else if (Parse.User.current() && !Parse.User.current().get("isActivate")) {
        this.router.navigate(['/500']);
      } else {
        this.router.navigate(['/login']);
      }
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(next, state);
    }
}
