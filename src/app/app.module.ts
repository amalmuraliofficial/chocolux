import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './utils/carousel/carousel.component';
import { SingleComponent } from './single/single.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { BuyComponent } from './buy/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    CarouselComponent,
    SingleComponent,
    SinglepageComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
