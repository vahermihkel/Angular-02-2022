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

    // {id: 3123, name: "Coca", price: 4}
  onAddToCart(product: Product) {
    // VANA: '[{id: 3122, name: "Fanta", price: 4}, {id: 3123, name: "Coca", price: 4}]'
    // UUS: '[{cartProduct: {id: 3122, name: "Fanta", price: 4},quantity:1}, {cartProduct: {id: 3122, name: "Coca", price: 4},quantity:2}]'
    const cartFromSS = sessionStorage.getItem("cart");
    let cartProducts: CartProduct[] = [];
    if (cartFromSS) {
        // VANA: '[{id: 3122, name: "Fanta", price: 4}, {id: 3123, name: "Coca", price: 4}]'
      cartProducts = JSON.parse(cartFromSS);
      // on olemas sessionStorage
      let index = cartProducts.findIndex(element => element.cartProduct.id == product.id);
      if (index > -1) {
      // on olemas juba ostukorvis --- suurendan quantity-t
      // cartProducts[index].quantity = cartProducts[index].quantity + 1;
      // cartProducts[index].quantity += 1;
      cartProducts[index].quantity++;
      } else {
        // ei olemas ostukorvis --- pushin
        const parcelIndex = cartProducts.findIndex(element => element.cartProduct.id === 11110000);
        if (parcelIndex === -1) {
          cartProducts.push({cartProduct: product, quantity: 1});
        } else {
          cartProducts.splice(cartProducts.length-2, 0, {cartProduct: product, quantity: 1});
        }
      }
    } else {
      // ei olemas sessionStorage-t
      cartProducts.push({cartProduct: product, quantity: 1});
    }
    this._toastService.success('Edukalt ostukorvi lisatud');
    sessionStorage.setItem("cart", JSON.stringify(cartProducts));
    this.cartService.cartChanged.next(true);
  }

}
