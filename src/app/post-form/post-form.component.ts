import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  // onAdd2 = new EventEmitter()

  @ViewChild('inputText') inputRef!: ElementRef

  postTitle: string = '';
  postText: string = '';

  ngOnInit() {
  }

  onAddPost() {
    if (this.postTitle.trim() && this.postText.trim()) {
      const post: Post = {
        title: this.postTitle,
        text: this.postText
      }
    this.onAdd.emit(post)
    this.postTitle = this.postText = ''
    }
  }

  focusText() {
    this.inputRef.nativeElement.focus();
  }
}
