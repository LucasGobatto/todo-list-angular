import { TodoItemModel } from '@domain/todo.model';

export const TODOS_KEYS = 'todos';

export class LocalStorageService {
  getItems(): TodoItemModel[] {
    const todosItems = localStorage.getItem(TODOS_KEYS);

    if (todosItems) {
      return this.sortByDate(JSON.parse(todosItems) as TodoItemModel[], 'asc');
    }

    return [];
  }

  setItems(todosItems: TodoItemModel[]): void {
    localStorage.setItem(TODOS_KEYS, JSON.stringify(todosItems));
  }

  private sortByDate(data: TodoItemModel[], order: 'asc' | 'desc') {
    return data.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      return (order === 'desc' ? 1 : -1) * (dateB.getTime() - dateA.getTime());
    });
  }
}
