import { Product } from "./product.model";

export class CartProduct {
  constructor(
    public cartProduct: Product,
    public quantity: number
  ) {}
}