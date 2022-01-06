import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Customer } from '../Modles/Customer';
import { ServiceEngineerResponse } from '../Modles/ServiceEngineerResponse'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceEngineerServiceService {

  constructor(private http: HttpClient) { }

  public connectEngineer(customer: Customer): Observable<ServiceEngineerResponse> 
  {
    /* Make Http request from backend to connnect engineer for the customer */
    return this.http.post<ServiceEngineerResponse>(environment.baseUrl.concat("connect"), customer, httpOptions);
  }

}
