import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

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
  isLoggedIn = false;

  constructor(private productService: ProductService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.productService.getProductsFromDb().subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
      this.originalProducts = newArray;
    })
    this.checkIfLoggedIn();
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

  onSearch() {
    this.products = this.originalProducts.filter(element => 
      element.name.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) > -1 ||
      element.id.toString().indexOf(this.searchedProduct.toLowerCase()) > -1);
  }

  onDelete(product: Product) {
    const index = this.originalProducts.indexOf(product);
    this.originalProducts.splice(index,1);
    this.productService.deleteProductFromDb(this.originalProducts).subscribe();
  }

  changeProductActive(product: Product) {
    const index = this.originalProducts.indexOf(product);
    this.originalProducts[index].isActive = !this.originalProducts[index].isActive;
    this.productService.editProductInDb(this.originalProducts).subscribe();
  }
}

// estonia
// great britain
// plus
// minus
// trash
