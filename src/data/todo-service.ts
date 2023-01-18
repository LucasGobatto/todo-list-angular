import { TodoItemModel } from '../domain/todo.model';
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

  addTodo(todoItem: Omit<TodoItemModel, 'id' | 'createdAt' | 'updatedAt'>) {
    const [, id] = Math.random().toString().split('.');
    const now = this.formatDate(new Date());
    this.items.push({ ...todoItem, id, createdAt: now });
    this.updateLocalStorage();
  }

  updateTodo(id: string, data: Partial<TodoItemModel>) {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return Object.assign(item, {
          ...data,
          updatedAt: this.formatDate(new Date()),
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

  private formatDate(date: Date) {
    const month = date.getMonth() + 1;
    const fixedMonth = month > 9 ? month : `0${month}`;
    const day = date.getDate();
    const fixedDay = day > 9 ? day : `0${day}`;

    return `${fixedDay}/${fixedMonth}/${date.getFullYear()}`;
  }

  private updateLocalStorage() {
    this.localStorageService.setItems(this.items);
  }
}
