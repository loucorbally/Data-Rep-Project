import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router} from '@angular/router';
import {TodoService} from '../services/todo.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.css']
})
export class ToDoEditComponent implements OnInit {
  post : any = [];
  myTitle : String; 
  myContent : String; 
  constructor(private router:Router, private route: ActivatedRoute, private service:TodoService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getToDo(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.post = data;
      console.log(this.post);
      this.myTitle = this.post.title;
      console.log("message" +this.myTitle);

    });
  }
  onEditToDo(form: NgForm) {
    this.service.updateToDo(this.post._id, form.value.title, form.value.content).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }

}