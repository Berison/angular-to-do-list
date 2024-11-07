import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppState, ToDoItem } from '../interfaces/state';

@Injectable()
export class ToDoStateService {
  public state$: BehaviorSubject<AppState> = new BehaviorSubject<AppState>({
    toDoList: [],
  });

  constructor() {}

  addToDoItem(item: ToDoItem) {
    const currentState = this.state$.value;
    const updatedToDoList = [...currentState.toDoList, item];
    this.state$.next({ toDoList: updatedToDoList });
  }

  removeToDoItem(itemId: number) {
    const currentState = this.state$.value;
    const updatedToDoList = currentState.toDoList.filter(
      (item) => item.id !== itemId
    );
    this.state$.next({ toDoList: updatedToDoList });
  }

  completeToDoItemState(itemId: number, complete: boolean) {
    const currentState = this.state$.value,
      foundToDoItem = currentState.toDoList.filter(
        (item) => item.id == itemId
      )[0];
    foundToDoItem.completed = complete;

    this.state$.next({ toDoList: currentState.toDoList });
  }
}
