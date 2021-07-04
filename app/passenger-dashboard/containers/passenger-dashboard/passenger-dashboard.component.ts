import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../services/passenger-dashboard.service";

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
  constructor(private passengerService: PassengerDashboardService) {}
ngOnInit(): void {
  this.passengers = this.passengerService.getPassengers();
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
