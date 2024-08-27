export interface ToDoItem {
  id: number;
  name: string;
  completed: boolean;
}

export interface AppState {
  toDoList: ToDoItem[];
}