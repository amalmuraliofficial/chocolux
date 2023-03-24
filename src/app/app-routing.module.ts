import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { CollectionComponent } from './collection/collection.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingleComponent } from './single/single.component';
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
    path:'buy',component:BuyComponent
  },
  {
    path:'collection',component:CollectionComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
