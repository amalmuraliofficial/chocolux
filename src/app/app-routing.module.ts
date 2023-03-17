import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingleComponent } from './single/single.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { CarouselComponent } from './utils/carousel/carousel.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent,
  },
  {
    path: 'home',component: HomeComponent
  },
  {
    path: 'login',component:LoginComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'carousel',component:CarouselComponent
  },
  {
    path:'single',component:SingleComponent
  },
  {
    path:'singlepage',component:SinglepageComponent
  },
  {
    path:'buy',component:BuyComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
