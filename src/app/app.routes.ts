import { Routes } from '@angular/router';
import { AuthComponent } from './core/layout/auth-layout/auth.component';
import { UserComponent } from './core/layout/user-layout/user.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CategoryComponent } from './features/category/components/category/category.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { NotFoundComponent } from './core/auth/components/not-found/not-found.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { BrandListComponent } from './features/brands/components/brand-list/brand-list.component';
import { ProductDetailsComponent } from './features/product/components/product-details/product-details.component';
import { authGuard } from './core/guards/auth.guard';
import { isLoggedGuard } from './core/guards/is-logged.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [isLoggedGuard], // This guard will protect all routes under this path
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home' },
      { path: 'categories', component: CategoryComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product-details/:slug/:id', component: ProductDetailsComponent },
      { path: 'brands', component: BrandListComponent },
      { path: 'cart', component: CartComponent },
    ],
    canActivate:[authGuard] // This guard will protect all routes under this path
    // canActivateChild:[authGuard] // This guard will protect all child routes under this path
  },
  { path: '**', component: NotFoundComponent },

];
