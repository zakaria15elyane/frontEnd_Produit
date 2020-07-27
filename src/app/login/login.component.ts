import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login=new FormGroup({
    name : new FormControl('',
    [
      Validators.required,
      Validators.minLength(4)
      ]),
    password : new FormControl('',
    [
    Validators.required,
    Validators.minLength(4)
    ]),
  })
  get name(){
    return this.login.get('name');
  }
  get password(){
    return this.login.get('password');
  }

}
