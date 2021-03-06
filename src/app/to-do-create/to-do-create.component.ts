import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  constructor(private service:TodoService) { }

  onAddToDo(form: NgForm) {
    if (!form.valid)
      return;
    
    this.service.addToDo(form.value.title, form.value.content, form.value.content2, form.value.date, form.value.completed).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
