import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { AuthService } from '../auth/auth.service';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  originalProducts: Product[] = [];
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    "https://picsum.photos/id/944/900/500",
    "https://picsum.photos/id/1011/900/500",
    "https://picsum.photos/id/984/900/500"
  ];
  isLoggedIn = false;
  categories: string[] = [];
  selectedCategory = "all";
  // HTMLi *ngFor kujule
  // .ts objektid
  // HTML-s:
  // src sees .url
  // h3 sees .title    "title1", title2
  // p sees .text       "text1"
  // alt sees .alt      "alt1"



  constructor(private _toastService: ToastService,
    private cartService: CartService,
    private productService: ProductService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.productService.getProductsFromDb().subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
      this.originalProducts = newArray;
      // [{n: "CC", c: "coca"}, {n: "Vichy", c: "water"},{n: "Fanta", c: "coca"},{n: "Sprite", c: "coca"}]
      // [].map(element => element.c);
      // ["coca", "water", "coca", "coca"].filter()
      // 1. ("coca", 0, Array)=> 0 === ["coca", "water", "coca", "coca"].indexOf("coca")
      //                          0 === 0    true
      // 2, ("water", 1, Array)=> 1 === ["coca", "water", "coca", "coca"].indexOf("water")
      //                           1 === 1    true
      // 3. ("coca", 2, Array)=> 2 === ["coca", "water", "coca", "coca"].indexOf("coca")
      //                          2 === 0   false
      this.categories = this.originalProducts
                          .map(element => element.category)
                          .filter((element, index, array) => 
                              index === array.indexOf(element)
                          );
    });

    this.checkIfLoggedIn();
  }

  private checkIfLoggedIn() {
    this.loggedInFromSS();
    this.authService.loggedInChanged.subscribe(() => {
      this.loggedInFromSS();
    })
  }

  loggedInFromSS() {
    if (sessionStorage.getItem("userData")) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  onFilterByCategory(category: string) {
    if (category === 'all') {
      this.products = this.originalProducts;
    } else {
      this.products = this.originalProducts.filter(element => element.category === category);
    }
    this.selectedCategory = category;
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

  // [
    // {cartProduct:{id: 3122, name: "Fanta", price: 4}, quantity: 1}, 
    // {cartProduct:{id: 3123, name: "Coca", price: 4}, quantity: 1}
  //]

  onSortNameAsc() {
    this.products.sort((a,b) => a.name.localeCompare(b.name));
  }

  onSortNameDesc() {
    this.products.sort((a,b) => b.name.localeCompare(a.name));
  }

  onSortPriceAsc() {
    this.products.sort((a,b) => a.price - b.price);
  }

  onSortPriceDesc() {
    this.products.sort((a,b) => b.price - a.price);
  }

}
