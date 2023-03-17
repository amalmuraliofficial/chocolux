import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  constructor(private n:HeroService,private router:Router){
  }
    
    whitechocolate=this.n.getwc();
    gotoHere(id:any){
      localStorage.setItem('id',id)
      this.router.navigate(['/singlepage'])

    }
}