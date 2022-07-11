import {Component, Input} from '@angular/core';
import {Skill} from "../app.component";

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent {

  @Input() skill!: Skill

  other:string = 'other'

}
