import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoryComponent } from './admin/category/category.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './shops/shops.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  // localhost:4200 -> localhost:4200/ostukorv
  // localhost:4200/admin
  { path: "", component: HomeComponent },
  { path: "ostukorv", component: CartComponent },
  { path: "poed", component: ShopsComponent },
  { path: "toode/:productId", component: SingleProductComponent },
  { path: "admin", component: AdminHomeComponent },
  { path: "admin/kategooria", component: CategoryComponent },
  { path: "admin/lisa", component: AddProductComponent },
  { path: "admin/muuda/:productId", component: EditProductComponent },
  { path: "admin/vaata-tooteid", component: ViewProductsComponent },
  // { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
