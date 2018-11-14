import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { TodoCreateComponent } from './to-do-create/to-do-create.component';
import {TodoService} from './services/todo.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { ToDoEditComponent } from './to-do-edit/to-do-edit.component';


const appRoutes: Routes = [
  {
    path: 'list',
    component: ToDoDetailsComponent
  },
  {
    path: 'create',
    component: TodoCreateComponent
  },
  {
    path: 'edit/:id',
    component: ToDoEditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoCreateComponent,
    ToDoDetailsComponent,
    ToDoEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
