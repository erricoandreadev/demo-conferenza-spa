import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  numPosts: number = null;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.numPosts = this.postService.getPosts().length;
  }

}
