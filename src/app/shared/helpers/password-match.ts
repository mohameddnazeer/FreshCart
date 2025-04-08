import { AbstractControl } from "@angular/forms";

export const passwordMatchValidator = (control: AbstractControl)=>{
    let pass = control.get('password')?.value;
    let rePass = control.get('rePassword')?.value;
    if(pass == rePass){
      return null;
    }else{
      return { passwordMismatch: true };
    }
  }