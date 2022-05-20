import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddCar = false;

  constructor() {

    // 1.
    // setTimeout( () => {
    //   this.canAddCar = true;
    // }, 3000)

  }

  // 2.
  addCarStatus = '';
  inputText = 'Default text'

  addCar() {
    this.addCarStatus = "Машина добавлена";
  }

  // 1.
  // onKeyUp(event : Event) {
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }
  // 2.
  // onKeyUp(value : any) {
  //   this.inputText = value;
  // }
  // onKeyUp(event : KeyboardEvent) {
  //   if (event.code === "Enter")
  //     this.inputText = (<HTMLInputElement>event.target).value;
  // }
  onKeyUp(event : Event) {
      this.inputText = (<HTMLInputElement>event.target).value;
  }

}
