import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  private readonly productsService = inject(ProductsService);

  allProducts: Product[] = [];

  getAllProducts() {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        this.allProducts = response.data;
      },
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}
