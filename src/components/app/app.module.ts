import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodoComponent } from '../add-todo';
import { TodoListComponent } from '../todo-list';
import { TodoService } from '../../data/todo-service';
import { CustomDatePipe } from '../pipes';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent,
    CustomDatePipe,
  ],
  imports: [BrowserModule],
  providers: [TodoService, CustomDatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
