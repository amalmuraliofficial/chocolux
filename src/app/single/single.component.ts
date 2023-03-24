import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {/*
  
 single:any
 constructor(private hero: HeroService,private r:Router){}
 ngOnInit():void{
  let name=localStorage.getItem('name')
  if(name==='WHITE CHOCOLATE'){
    this.single=this.hero.getwc();
    console.log(this.single);
  }else if(name==='DARK CHOCOLATE'){
    this.single=this.hero.getdc();
  }
  else if(name==='PURE CHOCOLATE'){
    this.single=this.hero.getpc();
 }
}
 buyNow(id:string){
  localStorage.setItem('id',id);
  this.r.navigate(['/buy']);
 }*/
 
 single:any
 constructor(private hero: HeroService,private r:Router){}
 ngOnInit():void{
  let title=localStorage.getItem('title')
  if(title==='WHITE CHOCOLATE'){
    this.single=this.hero.giveHammerData();
    console.log(this.single);
  }else if(title==='DARK CHOCOLATE'){
    this.single=this.hero.giveLadderData();
  }
  else if(title==='PURE CHOCOLATE'){
    this.single=this.hero.giveSpadeData();
 }
 else if(title==='VALENTINES DAY'){
  this.single=this.hero.giveChiselData();
}
else if(title==='ANNIVERSARY DAY'){
  this.single=this.hero.giveTrowelData();
}
else if(title==='CHRISTMAS COLLECTION'){
  this.single=this.hero.giveCircularsawData();
}
else if(title==='BERRY CHOCOLATE'){
  this.single=this.hero.giveDrillmachineData();

}
else if(title==='CHOCOLUX SPECIALS'){
  this.single=this.hero.giveWheelbarrowData();
}
else if(title==='GIFT COLLECTIONS'){
  this.single=this.hero.giveHandSawData();
}

 
}
 buyNow(id:string){
  localStorage.setItem('buyId',id);
  this.r.navigate(['/buy']);
 }
}