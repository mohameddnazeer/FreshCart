import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(environments.baseUrl + 'products');
  }

  getProductById(id: string | null): Observable<any> {
    return this.http.get(environments.baseUrl + `products/${id}`);
  }
}
