import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { AuthService } from '../../../core/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private https: HttpClient, private auth: AuthService) {}

  addProductToCart(prodectId: string) {
    return this.https.post(
      environments.baseUrl + 'cart',
      { prodectId },
      {
        headers: {
          token: this.auth.getToken() as string,
        },
      }
    );
  }

  updateProductQuantity(productId: string) {
    return this.https.put(
      environments.baseUrl + `cart/${productId}`,
      {
        count: '1',
      },
      {
        headers: {
          token: this.auth.getToken() as string,
        },
      }
    );
  }

  getAllProdectsInCart() {
    return this.https.get(environments.baseUrl + 'cart', {
      headers: {
        token: this.auth.getToken() as string,
      },
    });
  }

  removeProductFromCart(productId: string) {
    return this.https.delete(environments.baseUrl + `cart/${productId}`, {
      headers: {
        token: this.auth.getToken() as string,
      },
    });
  }

  clearAllCart() {
    return this.https.delete(environments.baseUrl + 'cart', {
      headers: {
        token: this.auth.getToken() as string,
      },
    });
  }
}
