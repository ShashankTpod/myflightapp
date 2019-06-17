import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { LoginModel } from 'src/app/models/login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password:String;
  email:String;

  user: LoginModel;
  loginForm: FormGroup;
  hide = true;

  constructor(private router: Router,private formBuilder: FormBuilder) { }
    

  ngOnInit() {
    this.user = new LoginModel();
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  login() : void {
    
    if(this.loginForm.value.email == "shashank@gmail.com" && this.loginForm.value.password == "123456"){
    
     this.router.navigate(["search"]);
    }else {
      alert("Invalid credentials");
    }
  }
  onLoginSubmit() {
    alert(this.user.email + ' ' + this.user.password);
  }
}
