import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private products: Product[] = [];
  isIdUnique = false;
  errorMessage = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>("https://webshop-02-2022-93e65-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
    })
  }

  onSubmit(addItemForm: NgForm) {
    if (addItemForm.valid && this.isIdUnique) {
      this.http.post(
        "https://webshop-02-2022-93e65-default-rtdb.europe-west1.firebasedatabase.app/products.json", 
        addItemForm.value).subscribe(() => {
          addItemForm.reset();
          this.http.get<Product[]>("https://webshop-02-2022-93e65-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
            let newArray = [];
            for (const key in productsFromDb) {
              newArray.push(productsFromDb[key]);
            }
            this.products = newArray;
          })
        });
    }
  }

  onCheckIdUniqueness(id: number) {
    this.errorMessage = "";
    if (id >= 10000000 && id <= 99999999) {
      const index = this.products.findIndex(element => element.id == id );
      if (index === -1) {
        console.log("unikaalne!");
        this.isIdUnique = true;
      } else {
        console.log("kellelgi on olemas!");
        this.errorMessage = "ID on juba kasutusel";
        this.isIdUnique = false;
      }
      console.log(id);
    }
  }
}
