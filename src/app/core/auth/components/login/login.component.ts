import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationMessagesComponent } from '../../../../shared/components/validation-messages/validation-messages.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ValidationMessagesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  resMsg: string = '';
  isLoading:boolean = true;
  private readonly AuthService = inject(AuthService);
  private readonly router = inject(Router)
  private readonly toastr = inject(ToastrService);

  authForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/),
    ]),
  });

  submitForm() {
    this.isLoading = false;
    if(this.authForm.valid){
      this.AuthService.login(this.authForm.value).subscribe({
        next:(response)=>{
          this.toastr.success('Login successful!', 'Welcome');
            this.router.navigate(['/home']);
        },
        error:(error)=>{
          this.resMsg = error.error.message;
        },
        complete:()=>{
          this.isLoading = true;
        }
      })
    }
  }
}
