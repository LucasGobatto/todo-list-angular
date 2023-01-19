import { CreateTodoItemModel, TodoItemModel } from '@domain/todo.model';
import { LocalStorageService } from './local-storage.service';

export class TodoService {
  private items: TodoItemModel[];
  private readonly localStorageService = new LocalStorageService();

  constructor() {
    this.items = this.localStorageService.getItems();
  }

  getTodos() {
    return this.items;
  }

  addTodo(todoItem: CreateTodoItemModel): TodoItemModel {
    const id = Math.random().toString().split('.')[1];
    const now = new Date();
    const newTodoItem = {
      ...todoItem,
      status: 'Todo',
      id,
      createdAt: now,
    } satisfies TodoItemModel;

    this.items.push(newTodoItem);
    this.updateLocalStorage();

    return newTodoItem;
  }

  updateTodo(id: string, data: Partial<TodoItemModel>) {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return Object.assign(item, {
          ...data,
          updatedAt: new Date(),
        });
      }

      return item;
    });

    this.updateLocalStorage();
  }

  deleteTodo(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    this.localStorageService.setItems(this.items);
  }
}
