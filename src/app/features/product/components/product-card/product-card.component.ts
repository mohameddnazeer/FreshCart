import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { StockStatusPipe } from '../../../../shared/pipes/stock-status.pipe';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, JsonPipe, StockStatusPipe],
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
