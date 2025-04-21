import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { AuthService } from '../../../core/auth/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private https: HttpClient, private auth: AuthService) {}

  addProductToCart(productId: string): Observable<any> {
    return this.https.post(
      environments.baseUrl + 'cart',
      { productId }
    );
  }

  updateProductQuantity(productId: string, count: number):Observable<any> {
    return this.https.put(
      environments.baseUrl + `cart/${productId}`,
      {
        count,
      }
    );
  }

  getAllProdectsInCart(): Observable<any> {
    return this.https.get(environments.baseUrl + 'cart');
  }

  removeProductFromCart(productId: string): Observable<any> {
    return this.https.delete(environments.baseUrl + `cart/${productId}`);
  }

  clearAllCart(): Observable<any> {
    return this.https.delete(environments.baseUrl + 'cart');
  }
}
