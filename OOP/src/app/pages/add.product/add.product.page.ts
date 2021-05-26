import { ApiService } from '../../services/api/api.service';
import { Product, ProductType } from './../../models/product.model';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'oop-add-product-page',
  templateUrl: 'add.product.page.html',
  styleUrls: ['add.product.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddProductPage {
  constructor(private apiSvc: ApiService, private navCtrl: NavController) {}
  addProduct(product: Product) {
    this.apiSvc.post('api/Product', product).subscribe(() => {
      this.navCtrl.pop();
    });
    return false;
  }
}
