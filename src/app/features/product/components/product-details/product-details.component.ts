import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productId: string | null = null;
  // private readonly route: ActivatedRoute;
  // or
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.snapshot.params.id
    // or but subscribe is better because it will update the value if the route changes
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      console.log('Product ID:', this.productId);
    });
  }
}
