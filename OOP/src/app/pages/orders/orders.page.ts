import { Product } from './../../models/product.model';
import { ApiService } from './../../services/api/api.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'oop-orders-page',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrdersPage {
  order: Order;

  constructor(private apiSvc: ApiService, private router: Router) {
    this.apiSvc.get('api/Orders').subscribe((response: Order) => {
      this.order = response;
    });
  }

  goToDetails(product: Product) {
    this.router.navigateByUrl(`products/${product.id}`);
  }
}
