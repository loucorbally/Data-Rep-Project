import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import { Observable } from 'rxjs';
import {ToDoModel} from '../todo.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class ToDoDetailsComponent implements OnInit {

  
  posts: any = [];

  constructor(private ps:TodoService){}

  ngOnInit(){
   
    this.ps.getToDoData().subscribe(data => {
        this.posts = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deleteToDo(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}