import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoCreateComponent } from './to-do-create/to-do-create.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoCreateComponent,
    ToDoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
