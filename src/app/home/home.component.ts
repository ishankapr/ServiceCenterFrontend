import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from "../Modles/Customer";
import { ServiceEngineerServiceService } from '../Services/service-engineer-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customers = [
      {
          "name": "Jhon (Customer 1)",
          "category": 1,
          "languageLevel" : 1,
          "connectedEngineer": "",
          "isConnected": false
      },
      {
          "name": "Rick (Customer 2)",
          "category": 1,
          "languageLevel" : 1,
          "connectedEngineer": "",
          "isConnected": false
      },
      {
          "name": "Glenn (Customer 3)",
          "category": 1,
          "languageLevel" : 2,
          "connectedEngineer": "",
          "isConnected": false
      }
  ] 

  constructor(private _engineerService: ServiceEngineerServiceService) {  }

  ngOnInit(): void {

  }

  public connectEngineer(customer: Customer)
  {
    console.log(customer)
     var response = this._engineerService.connectEngineer(customer).subscribe(
            data => {
              console.log(data)
              console.log(response)
              debugger
              if(data)
              {
                var index = this.customers.indexOf(customer,0)       
                this.customers[index].connectedEngineer = data.connectedEngineer
                this.customers[index].isConnected = true
              }
                  
             },
            error => {
              console.error("Error connecting engineer!");
             });
  }

  public disconnectEngineer(customer: Customer)
  {
    console.log(customer)
     var response = this._engineerService.disconnectEngineer(customer).subscribe(
            data => {
              console.log(data)           
             },
            error => {
              console.error("Error connectin engineer!");
             });
  }
}