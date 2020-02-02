import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { HttpHeaderResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class EmployeeService {
private apiUrl = '/api/employees';
constructor(private http: HttpClient) {
 }
findAll(): Promise<Array<Employee>> {
 return this.http.get(this.apiUrl)
 .toPromise()
 .then();
 }
createEmployee(employee: Employee): Promise<Array<Employee>> {
 let empHeaders = new Headers({ 'Content-Type': 'application/json' });
 return this.http.post(this.apiUrl, JSON.stringify(employee))
 .toPromise()
 .then()
 }
deleteEmployeeById(id: number): Promise<Array<Employee>> {
 const url = `${this.apiUrl}/${id}`;
 return this.http.delete(url)
 .toPromise()
 .then();
 }
private handleError(error: any): Promise<Array<any>> {
 console.error('An error occurred', error);
 return Promise.reject(error.message || error);
 }
}