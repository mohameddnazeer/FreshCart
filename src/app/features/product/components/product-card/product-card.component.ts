import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<string>();


  onAddToCart() {
    this.addToCart.emit(this.product._id);
  }
}
