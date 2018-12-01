import { Component } from '@angular/core';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';


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

onComplete(id:String){
 console.log("Complete called "+ id);
 this.ps.completeToDo(id).subscribe(() =>
 {
    this.ngOnInit();
 })
}
}