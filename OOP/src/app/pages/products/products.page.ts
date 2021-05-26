import { ApiService } from '../../services/api/api.service';
import { Product, ProductType } from './../../models/product.model';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'oop-products-page',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsPage {
  products: Array<Product>;
  duringOrder = false;

  constructor(
    private apiSvc: ApiService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    this.loadProducts();
  }

  goToEdit(product: Product) {
    this.router.navigateByUrl(`products/edit/${product.id}`);
  }

  deleteProduct(product: Product) {
    this.apiSvc.delete(`api/Product/${product.id}`).subscribe(() => {
      this.loadProducts();
    });
  }

  goToDetails(product: Product) {
    this.router.navigateByUrl(`products/${product.id}`);
  }
  startOrdering() {
    this.duringOrder = !this.duringOrder;
  }

  confirmOrder() {
    const checkedProducts = this.products.filter((p) => p.checked);
    const checkedProductsIds = checkedProducts.map((p) => p.id);
    const now = new Date();

    this.apiSvc
      .post('api/Orders', {
        orderedProductIds: checkedProductsIds,
        orderDateTime: now.toISOString(),
      })
      .subscribe(() => {
        this.alertCtrl
          .create({
            header: 'Order added!',
            message: "Go to 'My orders' page to view your cart",
            buttons: [
              {
                text: 'Ok',
                handler: () => {
                  this.duringOrder = false;
                },
              },
            ],
          })
          .then((alert) => alert.present());
      });
  }

  get orderButtonName() {
    return this.duringOrder ? 'Cancel order' : 'Start ordering';
  }

  private loadProducts() {
    this.apiSvc.get('api/Product').subscribe((result: Array<Product>) => {
      this.products = result;
    });
  }
}
