import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from "./components/cart/cart.component";
import { ShopComponent } from "./components/shop/shop.component";
import { AdminComponent } from "./components/admin/admin.component";


const routes: Routes = [
  {
    path: "cart", component: CartComponent
  },
  {
    path: "shop", component: ShopComponent
  },
  {
    path: "admin", component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //static components = [ CartComponent ];
 }
