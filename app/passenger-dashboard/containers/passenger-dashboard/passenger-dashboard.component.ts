import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count [items]="passengers"></passenger-count>
      <div *ngFor="let passenger of passengers"> {{ passenger.fullname }}</div>
      <passenger-detail *ngFor="let passenger of passengers"
      [detail]="passenger"
      (remove)="handleRemove($event)"
      (edit)="handleEdit($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {

  }
ngOnInit(): void {
  console.log('passengers initialized');
  this.passengers = [{
    id: 1,
    fullname: 'M. Uzair Aslam',
    checkedIn: true,
    checkedInDate: 1490742000000,
    children: null
  },{
    id: 2,
    fullname: 'M. Zunair Aslam',
    checkedIn: false,
    checkedInDate: null,
    children: [{ name: 'FChild', age: 5}, { name: 'SChild', age: 3}]
  },{
    id: 3,
    fullname: 'Bilal Afzal',
    checkedIn: true,
    checkedInDate: 1490742230000,
    children: [{ name: 'Fchile', age: 10}]
  },{
    id: 4,
    fullname: 'Jawad Ali Maken',
    checkedIn: false,
    checkedInDate: null,
    children: null
  }]
}
handleEdit(event: Passenger) {
  this.passengers = this.passengers.map(passenger => {
    if(passenger.id === event.id)
      passenger = Object.assign({}, passenger, event);
    return passenger;
  });
}

handleRemove(event: Passenger) {
  this.passengers = this.passengers.filter(passenger => passenger.id != event.id);
}
}
