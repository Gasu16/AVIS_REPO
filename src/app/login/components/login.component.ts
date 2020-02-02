import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginservice: AuthenticationService,
    private httpclientservice: HttpClientService) { }

  ngOnInit() {
  }

  checkLogin() {
    if(this.loginservice.authenticate(this.username, this.password)){
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/postlogin']);
    }
    else{
      this.invalidLogin = true;
      this.loginSuccess = false;
    }
/*
    this.loginservice.authenticate(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/postlogin']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });*/
    /*
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate(['/postlogin']); // if we access to the login it automatically redirects to root "/"
      this.invalidLogin = false;
    } else {
        this.invalidLogin = true;
      }*/

  }

}
