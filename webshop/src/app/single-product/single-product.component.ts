import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // node_module seest

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product: any; // kõik muutujad siin üleval - neid kasutame HTML-s

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    // "Mingisugune lause" .split("u") -> ["Mingis","g","ne la","se"]
    // const id = location.href.split("toode/")[1];
    const id = this.route.snapshot.paramMap.get("productId");
    console.log(id);

    this.http.get<any[]>("https://webshop-02-2022-93e65-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      const products = productsFromDb;
      this.product = products.find(element => element.id == id);
    })
  }

}
