import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductPricePipe } from './pipes/product-price.pipe';
import { ShortenDescriptionPipe } from './pipes/shorten-description.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './admin/category/category.component';
import { MapComponent } from './map/map.component';
import { ShopsComponent } from './shops/shops.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ParcelMachineComponent } from './cart/parcel-machine/parcel-machine.component';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { FilterBarComponent } from './home/filter-bar/filter-bar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CarouselSettingsComponent } from './admin/carousel-settings/carousel-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductsComponent,
    AdminHomeComponent,
    SingleProductComponent,
    ProductPricePipe,
    ShortenDescriptionPipe,
    NavbarComponent,
    CategoryComponent,
    MapComponent,
    ShopsComponent,
    LoginComponent,
    SignupComponent,
    ParcelMachineComponent,
    ProductCardComponent,
    FilterBarComponent,
    CarouselComponent,
    CarouselSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    FormsModule,
    ReactiveFormsModule,
    AngularToastifyModule,
    NgbModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}