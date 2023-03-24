import { Injectable } from '@angular/core';
import { /*ad, bc, cc, cs, dc, home, pc, vd, wc,gc,*/ Handsaw, data, hammer, ladder, spade, Trowel, chisel, Circularsaw, Drillmachine, Wheelbarrow} from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  /*[x: string]: any;

  constructor() { }

  getData()
  {
    return home
  }
  getwc()
  {
    return wc
  }
  getdc()
  {
    return dc
  }
  getpc()
  {
    return pc
  }
  getvd()
  {
    return vd
  }
  getad()
  {
    return ad
  }
  getcc()
  {
    return cc
  }
  getbc()
  {
    return bc
  }
  getcs()
  {
    return cs
  }
  getgc()
  {
    return gc
  }
*/

giveHandSawData() {
  return Handsaw
}
giveData(){
  return data
}
giveHammerData(){
  return hammer
}
giveLadderData(){
  return ladder
}
giveSpadeData(){
   return spade
}
giveChiselData(){
  return chisel
}
giveTrowelData(){
  return Trowel
}
giveCircularsawData(){
return Circularsaw
}
giveDrillmachineData(){
return Drillmachine
}
giveWheelbarrowData(){
return Wheelbarrow
}
giveHandsawData(){
return Handsaw
}
}
