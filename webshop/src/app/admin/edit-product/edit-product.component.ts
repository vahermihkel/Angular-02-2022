import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editForm!: FormGroup;
  private index = -1;
  private id = 0;
  private products: any[] = [];
  categories: {name: string}[] = [];
  errorMessage = "";
  isIdUnique = false;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("productId"));
    console.log(this.id);

    this.findProduct();
    this.fetchCategoriesFromDb();
  }

  findProduct() {
    this.productService.getProductsFromDb().subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
      console.log(this.products);
      let productFound = this.products.find(element => element.id == this.id);
      console.log(productFound);
      if (productFound) {
        this.index = this.products.indexOf(productFound);
        const product = productFound;
        this.initializeForm(product);
      }
    })
  }

  initializeForm(product: Product) {
    this.editForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name, [Validators.required]),
      price: new FormControl(product.price),
      imgSrc: new FormControl(product.imgSrc, [Validators.required, Validators.pattern(/^\S*$/)]),
      isActive: new FormControl(product.isActive),
      category: new FormControl(product.category),
      description: new FormControl(product.description),
    });
  }

  fetchCategoriesFromDb() {
    this.categoryService.getCategoriesFromDb().subscribe(categoriesFromDb => {
      let newArray = []; // {-madsdw213: {Product}, -aeadweq131: {Product}}
                          // [{Product}, {Product}]      MongoDb
      for (const key in categoriesFromDb) {
        newArray.push(categoriesFromDb[key]);
      }
      this.categories = newArray;
    })
  }

  onEdit() {
    this.products[this.index] = this.editForm.value;
    this.productService.editProductInDb(this.products).subscribe();
  }

  onCheckIdUniqueness(id: number) {
    this.errorMessage = "";
    if (id === 11110000) {
      this.errorMessage = "Tegemist on pakiautomaadi ID-ga";
      return;
    }
    if (id >= 10000000 && id <= 99999999) {
      const index = this.products.findIndex(element => element.id == id );
      console.log(id);
      console.log(this.id);
      if (index === -1 || id == this.id) {
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
