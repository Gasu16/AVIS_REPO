import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  constructor(){}
  ngOnInit() {
    
  }
/*
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.loginForm =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
  }
  */

}
