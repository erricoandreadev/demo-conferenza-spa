import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-child',
  templateUrl: './post-child.component.html',
  styleUrls: ['./post-child.component.css']
})
export class PostChildComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
