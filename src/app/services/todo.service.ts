import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  private posts: ToDo[] = [];
  //private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  addToDo(title: string, content: string): Observable<any> {
    const post: ToDo = {title: title, content: content};
    return this.http.post("http://localhost:8081/api/posts",post);
  }
deletePost(id: String): Observable<any>{
  return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

}
