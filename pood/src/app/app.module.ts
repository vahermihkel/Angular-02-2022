import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { LisaToodeComponent } from './admin/lisa-toode/lisa-toode.component';
import { MuudaToodeComponent } from './admin/muuda-toode/muuda-toode.component';
import { VaataTooteidComponent } from './admin/vaata-tooteid/vaata-tooteid.component';
import { AdminKoduComponent } from './admin/admin-kodu/admin-kodu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AvalehtComponent,
    OstukorvComponent,
    LisaToodeComponent,
    MuudaToodeComponent,
    VaataTooteidComponent,
    AdminKoduComponent
  ],
  imports: [
    BrowserModule, // *ngFor, *ngIf
    AppRoutingModule, // routerLink=""
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
