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
          "category": 2,
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
      },
      {
          "name": "Maxwell (Customer 4)",
          "category": 3,
          "languageLevel" : 3,
          "connectedEngineer": "",
          "isConnected": false
      },
      {
          "name": "Paul (Customer 5)",
          "category": 1,
          "languageLevel" : 2,
          "connectedEngineer": "",
          "isConnected": false
      },
      {
          "name": "Richard (Customer 6)",
          "category": 2,
          "languageLevel" : 2,
          "connectedEngineer": "",
          "isConnected": false
      },
      {
        "name": "River (Customer 7)",
          "category": 0,
          "languageLevel" : 1,
          "connectedEngineer": "",
          "isConnected": false
      },
      {
        "name": "Alex (Customer 8)",
          "category": 0,
          "languageLevel" : 2,
          "connectedEngineer": "",
          "isConnected": false
      },
      {
        "name": "Mitchel (Customer 9)",
          "category": 1,
          "languageLevel" : 2,
          "connectedEngineer": "",
          "isConnected": false
      }

  ] 

  isAllEngineersBusy: boolean = false

  constructor(private _engineerService: ServiceEngineerServiceService) {  }

  ngOnInit(): void {

  }

  public connectEngineer(customer: Customer)
  {
      this._engineerService.connectEngineer(customer).subscribe(
            data => {
                var index = this.customers.indexOf(customer,0)       
                this.customers[index].connectedEngineer = data.connectedEngineer
                this.customers[index].isConnected = data.isConnected
                this.isAllEngineersBusy = data.isAllEngineersBusy
             },
            error => {
              console.error("Error connecting engineer!");
             });
  }
}
