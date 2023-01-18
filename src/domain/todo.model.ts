export interface TodoItemModel {
  id: string;
  title: string;
  description?: string;
  status: TodoStatus;
  createdAt: Date;
  updatedAt?: Date;
}

export type TodoStatus = 'Todo' | 'In progress' | 'Done';
