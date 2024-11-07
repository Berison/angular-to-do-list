import { Component } from '@angular/core';
import { ToDoStateService } from './services/state.service';
import { Observable } from 'rxjs/internal/Observable';
import { distinctUntilChanged, map } from 'rxjs';
import { ToDoItem } from './interfaces/state';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoListComponent {
  // in the future, this can be converted to data from some other source, such as a database
  data = {
    title: {
      text: 'To-do list',
    },
    toDoItems: {
      text: 'To-do items:',
    },
  };

  toDoList$: Observable<ToDoItem[]> = this.toDoState.state$.pipe(
    map((state) => state.toDoList),
    map((items) =>
      items.sort((a, b) => Number(a.completed) - Number(b.completed))
    ),
    distinctUntilChanged()
  );

  constructor(private toDoState: ToDoStateService) {}
}
