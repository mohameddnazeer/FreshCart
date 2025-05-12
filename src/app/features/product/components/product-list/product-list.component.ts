import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../../../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../../../../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, SearchPipe,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly cartService = inject(CartService);
  private readonly toaster = inject(ToastrService);

  allProducts: Product[] = [];
  searchTerm: string = '';
  getAllProducts() {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        this.allProducts = response.data;
      },
    });
  }

  addProductToCart(id: string) {
    this.cartService.addProductToCart(id).subscribe({
      next: (response) => {
        this.toaster.success('Product added to cart','',{
          progressBar: true,
        })
        this.cartService.cartCounter.next(response.numOfCartItems);
      },
      error: (error) => {
        this.toaster.error(error.error.message,'',{
          progressBar: true,
        })
      }, 
      complete: () => {},
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}
