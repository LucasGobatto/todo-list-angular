import { Output, EventEmitter, Component } from '@angular/core';
import { TodoService } from '@data/todo-service';
import { TodoItemModel } from '@domain/todo.model';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() addTodoEvent = new EventEmitter<TodoItemModel>();
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
      const todoItem = this.todoService.addTodo({
        title: this.title,
        description: this.description || undefined,
      });

      this.addTodoEvent.emit(todoItem);

      this.title = '';
      this.description = '';
    }
  }
}
