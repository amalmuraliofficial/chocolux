import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {/*

  constructor(private n:HeroService,private router:Router){

  }

    home=this.n.getData();
    gotoHere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/single'])

    }*/
    
 constructor(private hero : HeroService, private router: Router){}
 data=this.hero.giveData();
 gotoHere(id:string){
  localStorage.setItem('title',id)
  this.router.navigate(['/single'])
}
}
