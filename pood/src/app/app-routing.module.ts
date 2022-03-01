import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminKoduComponent } from './admin/admin-kodu/admin-kodu.component';
import { LisaToodeComponent } from './admin/lisa-toode/lisa-toode.component';
import { MuudaToodeComponent } from './admin/muuda-toode/muuda-toode.component';
import { VaataTooteidComponent } from './admin/vaata-tooteid/vaata-tooteid.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';

const routes: Routes = [
  // localhost:4200/ostukorv --- componendi ostukorv.component.html
  // www.mihkel.ee/ostukorv
  { path: "", component: AvalehtComponent },
  { path: "ostukorv", component: OstukorvComponent },
  { path: "admin", component: AdminKoduComponent },
  { path: "admin/lisa", component: LisaToodeComponent },
  { path: "admin/muuda", component: MuudaToodeComponent },
  { path: "admin/tooted", component: VaataTooteidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
