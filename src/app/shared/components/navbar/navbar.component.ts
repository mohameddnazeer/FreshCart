import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/services/auth.service';
import { CartService } from '../../../features/cart/services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() layout!: string;

  navbarCounter: number = 0;
  private readonly authService = inject(AuthService);
  private readonly CartService = inject(CartService);

  logoutButton() {
    this.authService.removeToken();
  }

  ngOnInit(): void {
    this.authService.decodeToken();

    this.CartService.cartCounter.subscribe({
      next: (response)=>{
        this.navbarCounter = response;
      }
    })
  }
}
