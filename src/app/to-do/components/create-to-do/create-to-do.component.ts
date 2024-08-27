import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoStateService } from '../../services/state.service';

@Component({
  selector: 'create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrl: './create-to-do.component.scss'
})
export class CreateToDoComponent {
  createToDoForm: FormGroup;
  
  // in the future, this can be converted to data from some other source, such as a database
  data = {
    form: {
      label: {
        text: "Name of a to-do item:"
      },
      input: {
        placeholder: "Create a to-do"
      },
      alert: {
        text: "Name is required"
      },
      submit: {
        text: "Submit"
      }
    }
  };

  constructor(
    private fb: FormBuilder,
    private toDoStateService: ToDoStateService
  ) {
    this.createToDoForm = this.fb.group({
      'new-to-do-item': ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.createToDoForm.valid) {
      const toDoData = {
        id: new Date().getTime(), // Simplified ID generation
        name: this.createToDoForm.value['new-to-do-item'],
        completed: false
      };
      

      this.toDoStateService.addToDoItem(toDoData)
    }
  }
}