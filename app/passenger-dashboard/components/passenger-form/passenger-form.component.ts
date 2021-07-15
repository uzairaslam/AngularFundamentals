import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
      <div>
        Passenger Name:
        <input type="text" name="fullname" [ngModel]="detail?.fullname"
        #fullname="ngModel" required minlength=3>
      </div>
      <div *ngIf="fullname.errors && fullname.dirty" class="errors">
        <span *ngIf="fullname.errors?.required">Full name is required</span>
        <span *ngIf="fullname.errors?.minlength">Minimum length is {{fullname.errors?.minlength?.requiredLength}}</span>
      </div>
      <div>
        Passenger Id:
        <input type="number" name="id" [ngModel]="detail?.id" #id="ngModel">
      </div>
      <div *ngIf="id.errors && id.dirty" class="errors">
        <span *ngIf="fullname.errors?.required">Full name is required</span>
      </div>
      <div>
        <label>
          <input type="checkbox" [value]="true" name="checkedIn"
          [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
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
      <button mat-button [disabled]="form.invalid">Update Passenger</button>
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

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

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if(isValid){
      this.update.emit(passenger);
    }
  }
}
