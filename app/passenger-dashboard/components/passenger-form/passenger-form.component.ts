import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

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
          <input type="checkbox" [value]="true" name="checkedIn" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
          Checked In
        </label>
      </div>
      <div>
        <select name="baggage" [ngModel]="detail?.baggage">
          <option *ngFor="let item of baggages" [value]="item.key" [selected]="item.key === detail?.baggage">{{item.value}}</option>
        </select>
      </div>
      <div>
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

  baggages: Baggage[] = [{
    key: 'none',
    value: 'No Baggage'
  },{
    key: 'hand-only',
    value: 'Hand Baggage'
  },{
    key: 'hold-only',
    value: 'Hold Baggage'
  },{
    key: 'hand-hold',
    value: 'Hand and Hold Baggage'
  }];

  constructor(){
  }

  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn){
      this.detail.checkedInDate = Date.now();
    }
  }
}
