export interface TodoItemModel {
  id: string;
  title: string;
  description?: string;
  status: TodoStatus;
  createdAt: Date;
  updatedAt?: Date;
}

export interface CreateTodoItemModel {
  title: string;
  description?: string;
}

export type TodoStatus = 'Todo' | 'In progress' | 'Done';

export const progressStatusMapper: Record<TodoStatus, TodoStatus> = {
  Todo: 'In progress',
  'In progress': 'Done',
  Done: 'Done',
};
