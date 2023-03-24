import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {/*
  constructor(private hero:HeroService,private router:Router){

  }

    home=this.hero.getData();
    gotoHere(id:string){
      localStorage.setItem('id',id)
      this.router.navigate(['/single'])
    }
*/

constructor(private hero : HeroService, private router: Router){}
data=this.hero.giveData();
gotoHere(id:string){
 localStorage.setItem('title',id)
 this.router.navigate(['/single'])
}
}
