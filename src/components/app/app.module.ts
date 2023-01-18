import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodoComponent } from '../add-todo';
import { TodoListComponent } from '../todo-list';
import { TodoService } from '../../data/todo-service';

@NgModule({
  declarations: [AppComponent, TodoListComponent, AddTodoComponent],
  imports: [BrowserModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
