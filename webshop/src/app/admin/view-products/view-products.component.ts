import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("https://webshop-02-2022-93e65-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      this.products = productsFromDb;
    })
  }

}
