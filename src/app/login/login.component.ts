import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 

  name: string = '';
  email: string = '';
  password: string = '';


  constructor(
    private auths: AuthService,
    public auth: Auth,
  ) {}

  signup() {
    if (this.name == '') {
      alert("Please enter name")
      return;
    }
    if (this.email == '') {
      alert("Please enter email")
      return;
    }
    if (this.password == '') {
      alert("Please enter password")
      return;
    }
  
    
    this.auths.signup( this.name,this.email, this.password);
    this.name = '';
    this.email = '';
    this.password = '';
    
  }

  login(){
    if (this.email == '') {
      alert("Please enter email")
    }
    else if (this.password == '') {
      alert("Please enter password")
    }
    this.auths.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
