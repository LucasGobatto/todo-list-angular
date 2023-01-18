export interface TodoItemModel {
  id: string;
  title: string;
  description?: string;
  status: TodoStatus;
  createdAt: string;
  updatedAt?: string;
}

export type TodoStatus = 'Todo' | 'In progress' | 'Done';
