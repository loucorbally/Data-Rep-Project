import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import { Observable } from 'rxjs';
import {ToDoModel} from '../todo.model';
import {Router, ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-to-do-complete',
  templateUrl: './to-do-complete.component.html',
  styleUrls: ['./to-do-complete.component.css']
})
export class ToDoCompleteComponent implements OnInit {
 

  
  posts: any = [];

  constructor(private ps:TodoService, public snackBar: MatSnackBar, private service:TodoService){}

  ngOnInit(){
   
    this.ps.getToDoData().subscribe(data => {
        this.posts = data;
    });
   }

   onComplete(id:String){
     console.log("Complete called "+ id);
     this.ps.completeToDo(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
   onDelete(id:String){
    console.log("Delete called "+ id);
    this.ps.deleteToDo(id).subscribe(() =>
    {
       this.ngOnInit();
    })
  }
  

   /*openSnackBar() {
    this.snackBar.openFromComponent(ToDoCompleteComponent, {
      duration: 500,
    });
  } */
}
