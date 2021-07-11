import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-In]="detail.checkedIn"></span>
        <div *ngIf="editing">
          <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
        </div>
        <div *ngIf="!editing">
          {{ detail.fullname }}
        </div>
        <div class="date">Check in date: {{ detail.checkedInDate ? (detail.checkedInDate | date: 'y,MMMM dd') : null}} </div>
        <div>
          <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
          <button (click)="onRemove()">Remove</button>
        </div>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges {
  editing: boolean = false;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Input()
  detail: Passenger;

  constructor() {

  }

  ngOnChanges(changes) {
    if(changes.detail)
      this.detail = Object.assign({}, changes.detail.currentValue);
  }

  onNameChange(name: string) {
    this.detail.fullname = name;
  }

  toggleEdit() {
    if(this.editing)
      this.edit.emit(this.detail);

    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
