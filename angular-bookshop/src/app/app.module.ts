import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from 'src/app/components/_layout/app-header/app-header.component';
import { AppLayoutComponent } from 'src/app/components/_layout/app-layout/app-layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ShopComponent } from 'src/app/components/shop/shop.component';
import { CartComponent } from 'src/app/components/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ShopComponent,
    CartComponent,
    AdminComponent,
    AppHeaderComponent,
    AppLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
