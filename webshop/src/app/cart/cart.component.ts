import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = [];

  constructor() { }

  ngOnInit(): void {
    const cartProductsFromSS = sessionStorage.getItem("cart");
    if (cartProductsFromSS) {
      this.cartProducts = JSON.parse(cartProductsFromSS);
    }
  }

  onDecreaseQuantity(product: CartProduct) {
    product.quantity--;
    if (product.quantity < 1) {
      this.onRemoveFromCart(product);
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  onIncreaseQuantity(product: CartProduct) {
    product.quantity++;
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

          // {cartProduct: {id: 3123, name: "Coca", price: 4}, quantity}
  onRemoveFromCart(product: CartProduct) {
    const index = this.cartProducts.indexOf(product);
    this.cartProducts.splice(index,1);
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
}
