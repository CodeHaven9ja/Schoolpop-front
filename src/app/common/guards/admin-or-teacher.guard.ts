import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Injectable()
export class AdminOrTeacherGuard implements CanActivate {

	constructor(private us:UserService, private router: Router) {
	}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.us.currentUser.get("role") === "teacher" || this.us.currentUser.get("role") === "admin") {
      return true;
    } else {
      this.router .navigate(['/500']);
      return false;
    }
  }
}
