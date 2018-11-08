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

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.title, form.value.content).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
