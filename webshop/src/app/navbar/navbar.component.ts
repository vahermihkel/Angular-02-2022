import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sumOfCart = 100;

  constructor(private translate: TranslateService,
    private cartService: CartService) {}

  ngOnInit(): void {
    this.determineLanguage();
    this.getSumOfCart();
  }

  private determineLanguage() {
    const lang = localStorage.getItem("language");
    if (lang && (lang === "ee" || lang === "en")) { // true && true
      this.translate.setDefaultLang(lang);
    } else {
      this.translate.setDefaultLang("ee");
      localStorage.setItem("language", "ee");
    }
  }

  private getSumOfCart() {
    this.calculateSumOfCart();
    this.cartService.cartChanged.subscribe(() => {
      this.calculateSumOfCart();
    });
  }

  calculateSumOfCart() {
    this.sumOfCart = 0;
    const cartProductsFromSS = sessionStorage.getItem("cart");
    if (cartProductsFromSS) {
      let cartProducts: any[] = JSON.parse(cartProductsFromSS);
      cartProducts.forEach(element => 
        this.sumOfCart += element.cartProduct.price * element.quantity);
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }

 

}
