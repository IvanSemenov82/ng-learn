import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Skill} from "../app.component";

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  @Input() skill!: Skill
  @ContentChild('info', {static: true}) infoRef!: ElementRef

  other:string = 'other'

  ngOnInit() {
    console.log(this.infoRef.nativeElement)
  }

}
