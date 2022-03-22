import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // node_module seest
import { Product } from '../models/product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product!: Product; // kõik muutujad siin üleval - neid kasutame HTML-s

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    // "Mingisugune lause" .split("u") -> ["Mingis","g","ne la","se"]
    // const id = location.href.split("toode/")[1];
    const id = this.route.snapshot.paramMap.get("productId");
    console.log(id);

    this.http.get<Product[]>("https://webshop-02-2022-93e65-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      const products = newArray;
      let productFound = products.find(element => element.id == Number(id));
      if (productFound) {
        this.product = productFound;
      }
    })
  }

}
