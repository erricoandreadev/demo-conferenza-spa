import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string;
  body: string;

  constructor() { }

  ngOnInit() {
    this.title = "post";
    this.body = "body";
  }

}
