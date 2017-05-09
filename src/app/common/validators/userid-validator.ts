import { Validator, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Rx";

import { UserService } from '../services/user.service';

@Injectable()
export class AsyncUserIdValidator implements Validator {

  constructor(private us:UserService) {}

  validate(c: AbstractControl): Observable<{[key : string] : any}> {
    console.log(c.value);
    throw new Error('Method not implemented.');
  }

}