import { Component, OnInit } from '@angular/core';
import { TodoService } from '@data/todo-service';
import {
  TodoItemModel,
  TodoStatus,
  progressStatusMapper,
} from '@domain/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
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

  receiveNewTodo(newTodo: TodoItemModel) {
    this.allItems = Array.from(new Set([...this.allItems, newTodo]));
    this.items[newTodo.status].push(newTodo);
  }

  private updateItemStatus(todoItem: TodoItemModel) {
    this.updateItemsList({
      ...todoItem,
      status: progressStatusMapper[todoItem.status],
    });

    this.todoService.updateTodo(todoItem.id, {
      status: progressStatusMapper[todoItem.status]!,
    });
  }

  private updateItemsList(todoItem: TodoItemModel) {
    const todo = this.allItems.find(({ id }) => todoItem.id === id)!;
    const oldStatus = todo.status;

    const index = this.items[oldStatus].findIndex(
      ({ id }) => todoItem.id === id
    );

    this.items[oldStatus] = [
      ...this.items[oldStatus].slice(0, index),
      ...this.items[oldStatus].slice(index + 1),
    ];
    this.items[todoItem.status].push(todoItem);
  }
}
