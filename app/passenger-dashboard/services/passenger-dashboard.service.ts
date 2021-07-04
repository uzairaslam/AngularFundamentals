import { Passenger } from "../models/passenger.interface";

export class PassengerDashboardService{
  constructor(){}

  getPassengers(): Passenger[] {
    return [{
      id: 1,
      fullname: 'Uzair',
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
    }];
  }
}
