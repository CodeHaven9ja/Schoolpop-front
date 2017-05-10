import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { ToastsManager, Toast } from 'ng2-toastr';

import { RouteService } from '../../common/services/route.service';
import { UserService } from '../../common/services/user.service';
import { User } from '../../common/models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private rs: RouteService,
    private router: Router,
    private us: UserService,
    private fb: FormBuilder,
    private toastr: ToastsManager,
    vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
    this.createForm();
  }

  ngOnInit() {
    this.rs.setBc("login-body");
  }

  createForm() {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // console.log(this.authForm.value)
    this.isLoading = true;
    const cred = this.authForm.value;
    this.us.login(cred).subscribe(
      (user: User) => {
        this.isLoading = false;
        this.us.currentUser = null;
        this.us.setCurrentUser(user);
        location.href = "/dashboard";
      },
      (err: Response) => {
        let e = err.json();
        // console.log(e.error);
        this.toastr.error(e.error, 'Oops!');
        this.isLoading = false;
      },
      () => console.log("Complete")
    );
  }

}
