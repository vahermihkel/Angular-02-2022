import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  // localhost:4200 -> localhost:4200/ostukorv
  // localhost:4200/admin
  { path: "", component: HomeComponent },
  { path: "ostukorv", component: CartComponent },
  { path: "toode/:productId", component: SingleProductComponent },
  { path: "admin", component: AdminHomeComponent },
  { path: "admin/lisa", component: AddProductComponent },
  { path: "admin/muuda/:dansdnwadjn", component: EditProductComponent },
  { path: "admin/vaata-tooteid", component: ViewProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
