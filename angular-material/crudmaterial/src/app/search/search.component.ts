import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,Validators} from '@angular/forms';

export interface Flight {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  myControl = new FormControl();
  myControl1 = new FormControl();
  options: string[] = [
    'Hyderbad', 'Bangalore', 'Chennai', 'Siddipet', 'Tamilnadu', 'goa', 'Delhi', 'Mumbai',
    'Orissa', 'USA', 'England', 'soudhi arabia', 'Dubai', 'Maharstra', 'pune', 'singapur'
  ];
  flights: Flight[] = [
    {value: '1 adult', viewValue: '1 adult'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'}
  ];
  constructor() { }

  ngOnInit() {
  }
 change(){
   let temp=this.myControl.value;
   let temp2=this.myControl1.value;
   
 }
}
