import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

export interface Skill {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts: Post[] = [
    {
      title: 'Первый пост',
      text: 'Какой-то тeкст',
      id: 1,
    },
    {
      title: 'Второй пост',
      text: 'Ещё какой-то текст',
      id: 2,
    }
  ];

  skills: Skill[] = [
    {
      title: 'Первый навык',
      text: 'HTML',
      id: 1,
    },
    {
      title: 'Второй навык',
      text: 'CSS',
      id: 1,
    },
  ]

  updatePosts(post:Post) {
    this.posts.unshift(post)
    console.log(post)
  }

  updateSkills(skills:Skill) {
    this.skills.unshift(skills)
    console.log(skills)
  }
}
