import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {Skill} from "../app.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  @Output() addSkill: EventEmitter<Skill> = new EventEmitter<Skill>()

  skillTitle: string = "";
  skillText: string = "";

  ngOnInit() {
  }

  onAdd() {
    if (this.skillTitle.trim() && this.skillText.trim()) {
      const skill: Skill = {
        title: this.skillTitle,
        text: this.skillText
      }
      this.addSkill.emit(skill)
      this.skillTitle = this.skillText = ''
    }
  }
}
