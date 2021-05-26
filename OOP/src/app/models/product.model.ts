export class Product {
  id: number;
  name: string;
  description: string;
  productType: ProductType;
  price: number;
  checked?: boolean;
}

export enum ProductType {
  Consumable = 'Consumable',
  Heavy = 'Heavy',
  Other = 'Other',
}
