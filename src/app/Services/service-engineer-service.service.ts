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
    return this.http.post<ServiceEngineerResponse>(environment.baseUrl.concat("connect"), customer, httpOptions);
  }

  public disconnectEngineer(customer: Customer)
  {
    return this.http.post<boolean>(environment.baseUrl.concat("connect"), customer, httpOptions);
  }

}
