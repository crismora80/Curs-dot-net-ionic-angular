import { Product } from './../../models/product.model';
import { ApiService } from './../../services/api/api.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'oop-product-details-page',
  templateUrl: 'product.details.page.html',
})
export class ProductDetailsPage {
  product = new Product();
  constructor(private apiSvc: ApiService, private route: ActivatedRoute) {}

  ionViewWillEnter() {
    this.route.params.subscribe((params) => {
      this.product.id = params.productId;
      this.apiSvc
        .get(`api/Product/${this.product.id}`)
        .subscribe((response: Product) => {
          this.product = response;
        });
    });
  }
}
