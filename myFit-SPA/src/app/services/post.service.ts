import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
     return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true }));
  }
  deletePost(id){
    return this.http.delete(this.url + '/' + id);
  }

}

