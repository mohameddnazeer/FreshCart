import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { Order } from '../models/order.interface';
import { AuthService } from '../../../core/auth/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private https: HttpClient, private Auth:AuthService) { }

  createCheckout(cartId:string | null, shippingAddress: Order) : Observable<any>{
    const returnUrl = "?url=http://localhost:4200"
    return this.https.post(environments.baseUrl + `orders/checkout-session/${cartId}${returnUrl}`, {shippingAddress}
    )
  }
}
