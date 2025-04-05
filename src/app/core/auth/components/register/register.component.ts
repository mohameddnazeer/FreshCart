import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationMessagesComponent } from "../../../../shared/components/validation-messages/validation-messages.component";
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ValidationMessagesComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // form control
  name = new FormControl(null, [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
  ]);

  // form group
  authForm = new FormGroup({
    name: this.name,
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]),
  })
  submitInput(){
    console.log(this.authForm);
  }
}
