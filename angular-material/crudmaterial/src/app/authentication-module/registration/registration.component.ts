import { Component, OnInit } from '@angular/core';

import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { RegisterModel } from 'src/app/models/register.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;
  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'fname': [this.user.fname, [
        Validators.required
      ]],
      'lname': [this.user.lname, [
        Validators.required
      ]],
      'address': [this.user.address, [
        Validators.required
      ]],
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
  onRegisterSubmit() {
    alert(this.user.fname + ' ' + this.user.lname + ' ' + this.user.address + ' ' + this.user.email + ' ' + this.user.password);
  }
}