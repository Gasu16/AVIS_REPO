import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Response } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private httpclientmodule: HttpClientModule){}
/*
  private userApiURL = "http://localhost:8080/users";

  constructor(private httpclientmodule: HttpClientModule, private http: HttpClient) { }

  public getUsers():  Observable<any>{
    return this.http.get(this.userApiURL);
    
      
  }*/
}
