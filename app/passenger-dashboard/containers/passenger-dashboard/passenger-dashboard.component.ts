import { Component } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i=index">
        <span class="status" [class.checked-In]="passenger.checkedIn"></span>
        {{ i }}: {{ passenger.fullname }}
        <div class="date">Check in date: {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'y,MMMM dd') : null}} </div>
        <div class="children">Children: {{ passenger.children?.length || 0  }}</div>
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent {
passengers: Passenger[] = [{
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
