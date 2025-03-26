import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = new FormControl(null, [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
  ]);

  submitInput(){
    console.log(this.name.value);
    
  }
}
