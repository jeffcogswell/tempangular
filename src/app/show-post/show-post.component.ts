import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  @Input() thepost:Post = { title: '', thought: '' }
  constructor() { }

  ngOnInit(): void {
  }

  deleteThisPost() {
    alert('delete!');
  }

}
