import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productId: string | null = null;
  productDetails : Product= {} as Product;
  // private readonly route= inject(ActivatedRoute);
  // or
  constructor(private readonly route: ActivatedRoute) {}
  private readonly productsService = inject(ProductsService);



  getProductDetails(id :string | null){
    this.productsService.getProductById(id).subscribe({
      next:(response)=>{
        // console.log('Product Details:', response.data);
        this.productDetails = response.data;
      },
      error:()=>{},
      complete:()=>{}
    })
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      // console.log('Product ID:', this.productId);
    });
    this.getProductDetails(this.productId);
  }
}
