import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      <passenger-form [detail]="passenger" (update)="handleUpdate($event)"></passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit{
  passenger: Passenger;
  constructor(private passengerService: PassengerDashboardService){}
  ngOnInit(){
    this.passengerService.getPassenger(1).subscribe((data: Passenger) => this.passenger = data);
  }

  handleUpdate(event: Passenger){
    this.passengerService.editPassenger(event)
    .subscribe((data: Passenger) => this.passenger = Object.assign({}, this.passenger, event));
  }
}
