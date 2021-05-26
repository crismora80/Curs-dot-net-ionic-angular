import { ApiService } from '../../services/api/api.service';
import { Product, ProductType } from '../../models/product.model';
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'oop-edit-product-page',
  templateUrl: 'edit.product.page.html',
  styleUrls: ['edit.product.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditProductPage {
  product = new Product();
  constructor(
    private apiSvc: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}

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
  editProduct(product: Product) {
    this.apiSvc.put(`api/Product/${product.id}`, product).subscribe(() => {
      this.navCtrl.pop();
    });
    return false;
  }
}
