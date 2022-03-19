import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("https://webshop-02-2022-93e65-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      this.products = productsFromDb;
    })
  }

      // {id: 3123, name: "Coca", price: 4}
  onAddToCart(product: any) {
              // VANA: '[{id: 3122, name: "Fanta", price: 4}, {id: 3123, name: "Coca", price: 4}]'
              // UUS: '[{cartProduct: {id: 3122, name: "Fanta", price: 4},quantity:1}, {cartProduct: {id: 3122, name: "Coca", price: 4},quantity:2}]'
    const cartFromSS = sessionStorage.getItem("cart");
    let cartProducts: any[] = [];
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
        cartProducts.push({cartProduct: product, quantity: 1});
      }
    } else {
      // ei olemas sessionStorage-t
      cartProducts.push({cartProduct: product, quantity: 1});
    }
    sessionStorage.setItem("cart", JSON.stringify(cartProducts));
  }

  // [
    // {cartProduct:{id: 3122, name: "Fanta", price: 4}, quantity: 1}, 
    // {cartProduct:{id: 3123, name: "Coca", price: 4}, quantity: 1}
  //]

}
