import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../../model/cart.interface';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() product: Product = {} as Product;

  @Output() removeProduct = new EventEmitter<string>();
  @Output() updateProductQuantity = new EventEmitter<{id:string, count: number}>();
  
  onRemoveItem() {
    this.removeProduct.emit(this.product.product._id);
  }

  OnUpdateQuantity(newCount:number){
    this.updateProductQuantity.emit({id:this.product.product._id, count:newCount});
  }
}
