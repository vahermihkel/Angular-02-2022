import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { LisaToodeComponent } from './admin/lisa-toode/lisa-toode.component';
import { MuudaToodeComponent } from './admin/muuda-toode/muuda-toode.component';
import { VaataTooteidComponent } from './admin/vaata-tooteid/vaata-tooteid.component';
import { AdminKoduComponent } from './admin/admin-kodu/admin-kodu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToodeComponent } from './toode/toode.component';

@NgModule({
  declarations: [
    AppComponent,
    AvalehtComponent,
    OstukorvComponent,
    LisaToodeComponent,
    MuudaToodeComponent,
    VaataTooteidComponent,
    AdminKoduComponent,
    ToodeComponent
  ],
  imports: [
    BrowserModule, // *ngFor, *ngIf
    AppRoutingModule, // routerLink=""
    FormsModule, // ngModel, ngSubmit, ngForm
    ReactiveFormsModule, // formGroup, formControlName
    HttpClientModule, // http.post()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
