import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
        {{ detail | json}}
      <div>
        Passenger Name:
        <input type="text" name="fullname" [ngModel]="detail?.fullname">
      </div>
      <div>
        Passenger Id:
        <input type="number" name="id" [ngModel]="detail?.id">
      </div>
      <div>
        <label>
          <input type="radio" [value]="true" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
          Yes
        </label>
        <label>
          <input type="radio" [value]="false" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
          No
        </label>
        <div *ngIf="form.value.checkedIn">
          Checked In Date:
          <input type="number" name="checkedInDate" [ngModel]="detail?.checkedInDate" />
        </div>
      </div>
    </form>
    {{ form.value | json}}
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
  constructor(){
  }
  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn){
      this.detail.checkedInDate = Date.now();
    }
  }
}
