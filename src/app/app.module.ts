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
  MatExpansionModule,MatNativeDateModule,
  DateAdapter} from '@angular/material';
import { ToDoEditComponent } from './to-do-edit/to-do-edit.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ToDoCompleteComponent } from './to-do-complete/to-do-complete.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';





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
  },
  {
    path: 'complete',
    component: ToDoCompleteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoCreateComponent,
    ToDoDetailsComponent,
    ToDoEditComponent,
    ToDoCompleteComponent,


   
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
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  

  
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
