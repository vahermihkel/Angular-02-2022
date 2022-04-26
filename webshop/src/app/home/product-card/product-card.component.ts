import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { CartProduct } from 'src/app/models/cart-product.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() isLoggedIn = false;

  constructor(private _toastService: ToastService,
    private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart(product: Product) {
    const cartFromSS = sessionStorage.getItem("cart");
    let cartProducts: CartProduct[] = [];
    if (cartFromSS) {
      cartProducts = JSON.parse(cartFromSS);
      let index = cartProducts.findIndex(element => element.cartProduct.id == product.id);
      if (index > -1) {
        cartProducts[index].quantity++;
      } else {
        const parcelIndex = cartProducts.findIndex(element => element.cartProduct.id === 11110000);
        if (parcelIndex === -1) {
          cartProducts.push({cartProduct: product, quantity: 1});
        } else {
          cartProducts.splice(cartProducts.length-2, 0, {cartProduct: product, quantity: 1});
        }
      }
    } else {
      cartProducts.push({cartProduct: product, quantity: 1});
    }
    this._toastService.success('Edukalt ostukorvi lisatud');
    sessionStorage.setItem("cart", JSON.stringify(cartProducts));
    this.cartService.cartChanged.next(true);
  }

}
