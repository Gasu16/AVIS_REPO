import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})

export class PostloginService {

    constructor(private http: HttpClient) {
    }

    executePostLoginService() {
        return this.http.get<Message>('http://localhost:8080/greeting');
    }
  
}


