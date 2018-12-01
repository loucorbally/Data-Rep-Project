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
   
    this.getToDoDate();
    console.debug("Component loaded ")
   }

   /**
    * Delagate call 
    */
    getToDoDate(){
      this.ps.getToDoData().subscribe(data => {
        this.posts = data;
        console.log(data)
    });
    }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deleteToDo(id).subscribe(() =>
     {
        this.getToDoDate()
     })
   }

   onComplete(id:String){
    console.log("Complete called "+ id);
    this.ps.completeToDo(id).subscribe(() =>
    {
        this.getToDoDate()
    })
  }
  }