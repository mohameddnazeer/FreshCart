import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly cartService = inject(CartService);

  allProducts: Product[] = [];

  getAllProducts() {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        this.allProducts = response.data;
      },
    });
  }

  addProductToCart(id: string) {
    this.cartService.addProductToCart(id).subscribe({
      next: (response) => {},
      error: (error) => {},
      complete: () => {},
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}
