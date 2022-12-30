import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "ak@gmail.com", 50000),
    new SalesPerson("John", "Doe", "jd@gmail.com", 40000),
    new SalesPerson("Claire", "Murphy", "cm@gmail.com", 90000),
    new SalesPerson("Mai", "Truong", "mt@gmail.com", 60000)
  ];

}
