import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  singlepage: any 
  constructor(private n:HeroService){}
    ngOnInit():void{
      let id=localStorage.getItem('id');
      let nDataArray=this.n.getData();
      console.log(id);
      console.log(nDataArray);
      this.singlepage=nDataArray.filter(x=>x.id===id);
      console.log(this.singlepage);
    }
  }

