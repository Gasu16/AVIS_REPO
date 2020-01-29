import { HttpClientService } from './services/http-client.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'AVIS';
/*  greeting = {};
  constructor(private router: Router, private http: HttpClient){
    http.get('resource').subscribe(data => this.greeting = data);
  }

  loginF(){
    this.router.navigate(['./login/components']);
  }*/

  u1: User = new User("Matteo", "Grammatico", "GRMRRM96S11I754K", "11/11/1996");
  users: User[] = [];

  constructor(
    private httpclientservice: HttpClientService
  ){}
  ngOnInit(){
//    this.httpclientservice.getLogin()
//    this.httpclientservice.getUsers();
  }
}
