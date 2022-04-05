import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "https://webshop-02-2022-93e65-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  constructor(private http: HttpClient) { }

  getProductsFromDb() {
    return this.http.get<Product[]>(this.url);
  }

  deleteProductFromDb(products: Product[]) {
    return this.http.put(this.url,products);
  }

  addProductToDb(product: Product) {
    return this.http.post(this.url,product);
  }

  editProductInDb(products: Product[]) {
    return this.http.put(this.url,products);
  }
}
