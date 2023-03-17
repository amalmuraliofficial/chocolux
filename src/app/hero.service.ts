import { Injectable } from '@angular/core';
import { darkchocolate, homedatabase, purechocolate, whitechocolate} from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  [x: string]: any;

  constructor() { }

  getData()
  {
    return homedatabase
  }
  getwc()
  {
    return whitechocolate
  }
  getdc()
  {
    return darkchocolate
  }
  getpc()
  {
    return purechocolate
  }

}
