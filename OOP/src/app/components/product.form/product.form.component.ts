import { Product, ProductType } from './../../models/product.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'oop-product-form',
  templateUrl: 'product.form.component.html',
})
export class ProductFormComponent {
  @Input() actionName: string;
  @Input() product = new Product();
  @Output() confirm = new EventEmitter<Product>();

  PRODUCT_TYPES = [
    ProductType.Consumable,
    ProductType.Heavy,
    ProductType.Other,
  ];

  constructor() {}
  submitProduct() {
    this.confirm.emit(this.product);
  }
}
