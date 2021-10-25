import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  
  allposts: Post[] = [
    { title: 'First', thought: 'This is the first post' },
    { title: 'Second', thought: 'This is the second post' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(thepost: Post) {
    console.log(thepost);
  }

  onDelete(thepost: Post) {
    console.log(thepost);
  }

  addPostToList(thepost: Post) {
  }

}
