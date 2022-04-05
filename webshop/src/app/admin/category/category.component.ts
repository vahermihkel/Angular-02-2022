import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategoriesFromDb().subscribe(categoriesFromDb => {
      let newArray = [];
      for (const key in categoriesFromDb) {
        newArray.push(categoriesFromDb[key]);
      }
      this.categories = newArray;
      console.log(this.categories)
    })
  }

  onSubmitCategory(form: NgForm) {
    this.categories.push(form.value);
    this.categoryService.addCategoryToDb(form.value).subscribe();
  }

  onDeleteCategory(category: {name: string}) {
    const index = this.categories.indexOf(category);
    this.categories.splice(index,1);
    // this.categories.delete(category);
    // this.categories.remove(category)
    this.categoryService.deleteCategoryFromDb(this.categories).subscribe();
  }

}
