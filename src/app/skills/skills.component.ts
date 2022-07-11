import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Skill} from "../app.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {

  @Output() addSkill: EventEmitter<Skill> = new EventEmitter<Skill>()

  @ViewChild('titleInput', {static:false}) inputRef!: ElementRef

  skillTitle: string = "";
  skillText: string = "";

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

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}
