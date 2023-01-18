import { Component } from '@angular/core';
import { TodoService } from '../../data/todo-service';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title = '';
  description = '';

  constructor(private readonly todoService: TodoService) {}

  onTitleChange(event: KeyboardEvent) {
    this.title = (event.target as HTMLInputElement).value;
  }

  onDescriptionChange(event: KeyboardEvent) {
    this.description = (event.target as HTMLInputElement).value;
  }

  onSubmit() {
    if (this.title) {
      this.todoService.addTodo({
        title: this.title,
        description: this.description || undefined,
        status: 'Todo',
      });

      this.title = '';
      this.description = '';
    }
  }
}
