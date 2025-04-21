import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { ValidationMessagesComponent } from "../../../../shared/components/validation-messages/validation-messages.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule,ValidationMessagesComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  resMsg: string = '';
  isLoading:boolean = true;
  cartId: string | null ='';
  checkoutForm!: FormGroup;
  private readonly OrderService = inject(OrderService);
  private readonly activetedRoute = inject(ActivatedRoute);

  formInit(){
    this.checkoutForm= new FormGroup({
      details: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required])
    })
  }

  getCartId(){
    this.activetedRoute.paramMap.subscribe({
      next:(params)=>{
        this.cartId = params.get('id');
      }
    })
  }

  submitForm(){
    this.isLoading = false;
    if(this.checkoutForm.valid){
      this.OrderService.createCheckout(this.cartId,this.checkoutForm.value).subscribe({
        next:(response)=>{
          this.isLoading = true;
          console.log(response);
          window.open(response.session.url, '_blank');
        }
      })
      // console.log(this.checkoutForm.value);
      // console.log(this.activetedRoute.snapshot.params['id']);
      
    }
  }

  ngOnInit(): void {
    this.getCartId()
    this.formInit()
  }
}
