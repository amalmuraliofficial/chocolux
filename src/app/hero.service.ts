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



  import { Injectable } from '@angular/core';
import { fauna, flora } from 'src/assets/data';
import { getAuth } from '@angular/fire/auth';
import { Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, Firestore ,collectionData} from '@angular/fire/firestore';
import { DocumentReference, getFirestore } from '@firebase/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  userid:any;
  db:any =getFirestore()

  constructor(private router:Router,private auth:Auth,private firestore:Firestore) { }
 
 


login(email:string,password:string){
signInWithEmailAndPassword(this.auth,email,password).then(()=>{
  localStorage.setItem('email',email);
  this.userid=this.auth.currentUser?.uid;
  console.log(this.userid);

  this.router.navigate(['home'])
}, (err)=>{
  alert(err.message);
  this.router.navigate(['login'])
});
}



register(cred:any){
  createUserWithEmailAndPassword(this.auth,cred.email,cred.password).then(
  () =>{
    this.userid= this.auth.currentUser?.uid;
    const userDetails={
      uid:this.userid,
      name:cred.name,
      email:cred.email,
      
    };
    const docRef = collection(this.firestore,'users');
    addDoc(docRef,userDetails).then(()=>{})
    .catch((err)=>console.log(err.message));
    alert("user created successfully");
    this.router.navigate(['/home']);


      }
  
  
  
  );
}
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
