import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(
    private http: HttpClient
  ) { }


  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl+"/posts");
  }
}
