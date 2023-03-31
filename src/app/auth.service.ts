import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from '@angular/fire/auth';

import {
 
  Firestore,
 
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(
    !!sessionStorage.getItem('loggedInUser')
  );

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  user: any;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router,
    private fs: Firestore
  ) {}

  signup(email: string, password: string, name: string) {
    createUserWithEmailAndPassword(this.auth,name,email).then(
      () => {
        
        alert("Signing up successfully")
     
      },
      
    );
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      () => {
       alert("Logged in successfully")
        sessionStorage.setItem('loggedInUser', email);
        this.loggedIn.next(true);
        this.router.navigate(['collection']);
      },
      (err) => {
        if (err.code === 'auth/wrong-password') {
         alert("Wrong password. Please try again")
        }
        else if(err.code === 'auth/user-not-found'){
         alert("No user found. Please try again")
        }
        else if(err.code === "auth/invalid-email") {
         alert("Invalid email. Please try again")
        } 

        
      }
     
    );
    
  }


}