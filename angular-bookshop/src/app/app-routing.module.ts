import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from "./components/cart/cart.component";
import { ShopComponent } from "./components/shop/shop.component";
import { AdminComponent } from "./components/admin/admin.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { LoginComponent } from "./components/login/login.component";


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/login' },
  { path: "cart", component: CartComponent },
  { path: "shop", component: ShopComponent },
  { path: "admin", component: AdminComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //static components = [ CartComponent ];
 }
