import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationMessagesComponent } from "../../../../shared/components/validation-messages/validation-messages.component";
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ValidationMessagesComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  resMsg : string ="";
  isLoading: boolean = true;
  private readonly AuthService = inject(AuthService);
  private readonly toastr = inject(ToastrService);
  private readonly router = inject(Router);
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
      // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)
    ]),
  }, {validators: this.passwordMatchValidator});

  passwordMatchValidator(control: AbstractControl){
    let pass = control.get('password')?.value;
    let rePass = control.get('rePassword')?.value;
    if(pass == rePass){
      return null;
    }else{
      return { passwordMismatch: true };
    }
  }

  submitInput(){
    this.isLoading = false;
    if(this.authForm.valid && !this.isLoading){
      this.AuthService.register(this.authForm.value).subscribe({
        next:(response)=>{
          this.toastr.success('Register successful!', 'Welcome');
          this.authForm.reset();
          if(response.message == 'success'){
            this.router.navigate(['/login']);
          }
        },
        error:(error)=>{
          this.resMsg = error.error.message;
        },
        complete:()=>{
        this.isLoading = true;
        }
      })
    }else{
      this.authForm.get('rePassword')?.setValue("");
      this.authForm.markAllAsTouched();
    }
  }

  
}
