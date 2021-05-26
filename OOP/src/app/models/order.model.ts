import { Product } from './product.model';

export class Order {
  applicationUser: ApplicationUser;
  products: Array<Product>;
  dateTime: string;
}

export class ApplicationUser {
  email: string;
}
