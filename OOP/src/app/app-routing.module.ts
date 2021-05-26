import { ProductDetailsPage } from './pages/product.details/product.details.page';
import { AddProductPage } from './pages/add.product/add.product.page';
import { OrdersPage } from './pages/orders/orders.page';
import { ProductsPage } from './pages/products/products.page';
import { LoginPage } from './pages/login/login.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ApiService } from './services/api/api.service';
import { EditProductPage } from './pages/edit.product/edit.product.page';

const routes: Routes = [
  {
    path: 'home',
    component: LoginPage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsPage,
  },
  {
    path: 'products/add',
    component: AddProductPage,
  },
  {
    path: 'products/edit/:productId',
    component: EditProductPage,
  },
  {
    path: 'products/:productId',
    component: ProductDetailsPage,
  },
  {
    path: 'orders',
    component: OrdersPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [ApiService],
})
export class AppRoutingModule {}
