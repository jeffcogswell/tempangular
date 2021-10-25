import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  newTitle: string = "";
  newThought: string = "";

  @Output() addPost:EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewPost() {
    let newPost: Post = { title: this.newTitle, thought: this.newThought };
    this.addPost.emit(newPost);
  }

}
