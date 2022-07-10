import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../app.component";

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  @Input() skill!: Skill

  other:string = 'other'

  constructor() { }

  ngOnInit(): void {
  }

}
