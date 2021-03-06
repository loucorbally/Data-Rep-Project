import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ToDoModel} from '../todo.model';
//import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  
  getToDoData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  addToDo(title: string, content: string, content2: string, date: string, completed: Boolean): Observable<any> {
    const post: ToDoModel = {title: title, content: content, content2: content2, date: date, completed: false};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

 
  deleteToDo(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  completeToDo(id: String): Observable<any> {
    
    return this.http.patch("http://localhost:8081/api/posts/"+id, JSON.stringify('Completing'));
  }

  getToDo(id:String): Observable<any> {
 
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  updateToDo(id:String, title: string, content: string, content2: string, date: string, completed: Boolean): Observable<any> {
    const post: ToDoModel = {title: title, content: content, content2: content2, date: date, completed: false};
  return this.http.put("http://localhost:8081/api/posts/"+id, post);
  }
}