import { Validator, AbstractControl } from '@angular/forms';
export class ClassRoomStudentsValidator implements Validator {

  validate(c: AbstractControl) {
    console.log(c.value)
    return null;
  }

}

export function validateClassRoomName(name: string, classes:any[]): { [key: string]: any } {
  return {
    inClass:  true
  }
}