import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  sumOfCart = 0;
  parcelMachines: any[] = [];
  selectedParcelMachine = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const cartProductsFromSS = sessionStorage.getItem("cart");
    if (cartProductsFromSS) {
      this.cartProducts = JSON.parse(cartProductsFromSS);
      this.calculateSumOfCart();
    }

    this.http.get<any[]>("https://www.omniva.ee/locations.json").subscribe(machinesFromAPI => {
      this.parcelMachines = machinesFromAPI.filter(element => element.A0_NAME === "EE");
    })

    const pMachineFromLS = localStorage.getItem("parcelmachine");
    if (pMachineFromLS) {
      this.selectedParcelMachine = pMachineFromLS;
    }

  }

  onDecreaseQuantity(product: CartProduct) {
    product.quantity--;
    if (product.quantity < 1) {
      this.onRemoveFromCart(product);
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.calculateSumOfCart();
  }

  onIncreaseQuantity(product: CartProduct) {
    product.quantity++;
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.calculateSumOfCart();
  }

          // {cartProduct: {id: 3123, name: "Coca", price: 4}, quantity}
  onRemoveFromCart(product: CartProduct) {
    const index = this.cartProducts.indexOf(product);
    this.cartProducts.splice(index,1);
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.calculateSumOfCart();
  }

  private calculateSumOfCart() {
    this.sumOfCart = 0;
    this.cartProducts.forEach(element => 
      this.sumOfCart += element.cartProduct.price * element.quantity);
  }

  onDeleteParcelMachine() {
    this.selectedParcelMachine = "";
    localStorage.removeItem("parcelmachine");
  }

  onSelectedPMachine() {
    localStorage.setItem("parcelmachine", this.selectedParcelMachine);
  }
}
