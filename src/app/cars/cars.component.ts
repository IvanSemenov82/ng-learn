import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Reno', 'Mazda', 'Tesla'];

  dates = [
    new Date (2015, 4, 5).toDateString(),
    new Date (2010, 1, 7).toDateString(),
    new Date (2011, 2, 66).toDateString(),
    new Date (2000, 3, 4).toDateString(),
  ]

  addCar() {
    this.cars.push(this.carName);
    this.addCarStatus = true;
    this.carName = ''
  }

}
