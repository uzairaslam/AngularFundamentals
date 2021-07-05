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
  this.passengerService.getPassengers()
  .subscribe((data: Passenger[]) => {
    console.log(data, 'passengers Data');
    this.passengers = data;
  });
}
handleEdit(event: Passenger) {
  this.passengerService.editPassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.map(passenger => {
        if(passenger.id === event.id)
          passenger = Object.assign({}, passenger, event);
        return passenger;
      });
    })
}

handleRemove(event: Passenger) {
  this.passengerService.removePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter(passenger => passenger.id != event.id);
    });
}
}
