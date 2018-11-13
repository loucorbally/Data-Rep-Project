import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ToDo} from '../todo.model';
//import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  
    getToDoData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  addToDo(title: string, content: string): Observable<any> {
    const post: ToDo = {title: title, content: content};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  deleteToDo(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  getToDo(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  updateToDo(id:String, title: string, content: string): Observable<any> {
    const post: ToDo = {title: title, content: content};
  return this.http.put("http://localhost:8081/api/posts/"+id, post);
  }
}