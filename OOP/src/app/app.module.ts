import { UnauthenticatedInterceptor } from './interceptors/unauthenticated.interceptor';
import { ProductDetailsPage } from './pages/product.details/product.details.page';
import { EditProductPage } from './pages/edit.product/edit.product.page';
import { ProductFormComponent } from './components/product.form/product.form.component';
import { ApiService } from './services/api/api.service';
import { AuthService } from './services/authorization/auth.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProductPage } from './pages/add.product/add.product.page';
import { OrdersPage } from './pages/orders/orders.page';
import { ProductsPage } from './pages/products/products.page';
import { LoginPage } from './pages/login/login.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuCompoonent } from './components/side.menu/side.menu.component';

@NgModule({
  declarations: [
    AppComponent,
    // pages
    AddProductPage,
    EditProductPage,
    LoginPage,
    OrdersPage,
    ProductDetailsPage,
    ProductsPage,
    // components
    NavbarComponent,
    ProductFormComponent,
    SideMenuCompoonent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthenticatedInterceptor,
      multi: true,
    },
    ApiService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
