import { Component } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent {

  arr: Array<number> = [];
  drawNumber: number = 0;

  Draw() {
    for (let i=50;i<this.drawNumber;i++) {
      this.arr[i-50] = i;
    }
    console.log(this.arr)
    console.log(this.drawNumber)
  }

}
