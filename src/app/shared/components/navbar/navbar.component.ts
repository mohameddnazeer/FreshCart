import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() layout!: string;

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  logoutButton(){
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void{
    this.authService.decodeToken();
  }
}
