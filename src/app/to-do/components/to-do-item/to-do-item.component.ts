import { Component, Input } from '@angular/core';
import { ToDoItem } from '../../interfaces/state';
import { ToDoStateService } from '../../services/state.service';

@Component({
  selector: 'to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.scss'
})
export class ToDoItemComponent {
  @Input() toDo!: ToDoItem;

  // in the future, this can be converted to data from some other source, such as a database
  data = {
    button: {
      text: "DELETE ITEM"
    }
  };

  isCompleted: boolean = false;

  constructor(
    private toDoStateService: ToDoStateService
  ) { }

  onCheckboxChange(isCompleted: boolean) {
    this.toDoStateService.completeToDoItemState(this.toDo.id, isCompleted)
  }

  deleteToDo() {
    this.toDoStateService.removeToDoItem(this.toDo.id)
  }
}
