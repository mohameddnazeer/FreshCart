import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../model/cart.interface';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { RouterLink } from '@angular/router';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-list',
  imports: [CartItemComponent, RouterLink],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  cartDetails:Cart={} as Cart;
  isLoading: boolean= true;
  private readonly cartService = inject(CartService);
  private readonly toaster = inject(ToastrService); 

  loadCart(){
    this.cartService.getAllProdectsInCart().subscribe({
      next:(response)=>{
        this.cartDetails = response;
        this.isLoading = false;
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{}
    })
  }

  removeItemFromCart(id:string){
    this.cartService.removeProductFromCart(id).subscribe({
      next:(response)=>{
        // console.log(response);
        this.cartDetails= response;
        this.toaster.success('Product removed from cart','',{
          progressBar: true,
          timeOut: 2000,
        })
      },
      error:(error)=>{
        this.toaster.error(error.error.message,'',{
          progressBar: true,
          timeOut: 2000,
        })
      },
    })
  }

  updateQuantity(id:string , count:number ){
    this.cartService.updateProductQuantity(id, count).subscribe({
      next:(response)=>{
        this.cartDetails = response;
        this.toaster.success('Product quantity updated','',{
          progressBar: true,
          timeOut: 2000,
        })
      }
    })
  }

  removeAllProductsFromCart(){
    this.cartService.clearAllCart().subscribe({
      next:(response)=>{
        // if(response.status === 'success'){
          this.loadCart();
        // }
        this.toaster.success('All products removed from cart','',{
          progressBar: true,
          timeOut: 2000,
        })
        
      }
    })
  }

  ngOnInit(): void {
    this.loadCart();
  }
}
