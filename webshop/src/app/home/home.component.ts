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



  constructor(private productService: ProductService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchProductsFromDb();
    this.checkIfLoggedIn();
  }

  private fetchProductsFromDb() {
    this.productService.getProductsFromDb().subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
      this.originalProducts = newArray;
      this.categories = this.originalProducts
                          .map(element => element.category)
                          .filter((element, index, array) => 
                              index === array.indexOf(element)
                          );
    });
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

  // [
    // {cartProduct:{id: 3122, name: "Fanta", price: 4}, quantity: 1}, 
    // {cartProduct:{id: 3123, name: "Coca", price: 4}, quantity: 1}
  //]

}
