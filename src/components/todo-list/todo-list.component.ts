import { Component, OnInit } from '@angular/core';
import { TodoService } from '@data/todo-service';
import { TodoItemModel, TodoStatus } from '@domain/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  readonly title = 'To do List';
  readonly status: TodoStatus[] = ['Todo', 'In progress', 'Done'];
  private allItems: TodoItemModel[] = [];
  readonly items: Record<TodoStatus, TodoItemModel[]> = {
    Todo: [],
    'In progress': [],
    Done: [],
  };

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.allItems = this.todoService.getTodos();

    this.allItems.forEach((item) => this.items[item.status].push(item));
  }

  onClick(id: string): void {
    const item = this.allItems.find((item) => item.id === id)!;

    this.updateItemStatus(item);
  }

  private updateItemStatus(item: TodoItemModel) {
    const statusMapper: Record<TodoStatus, TodoStatus> = {
      Todo: 'In progress',
      'In progress': 'Done',
      Done: 'Done',
    };

    this.todoService.updateTodo(item.id, {
      status: statusMapper[item.status]!,
    });
  }
}
