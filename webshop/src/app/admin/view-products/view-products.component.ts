import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  products: Product[] = [];
  originalProducts: Product[] = [];
  wordCount = 4;
  searchedProduct = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>("https://webshop-02-2022-93e65-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
      this.originalProducts = newArray;
    })
  }

  onSearch() {
    this.products = this.originalProducts.filter(element => 
      element.name.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) > -1 ||
      element.id.toString().indexOf(this.searchedProduct.toLowerCase()) > -1);
  }
}

// estonia
// great britain
// plus
// minus
// trash
