import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodoComponent } from '@components/add-todo';
import { TodoListComponent } from '@components/todo-list';
import { TodoService } from '@data/todo-service';
import { CustomDatePipe } from '@components/pipes';

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
