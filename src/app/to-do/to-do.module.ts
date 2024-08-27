import { NgModule }      from '@angular/core';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { ToDoListComponent } from './to-do.component';
import { CommonModule } from '@angular/common';
import { ToDoStateService } from './services/state.service';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule, FormsModule ],
  exports:      [ ToDoListComponent ],
  declarations: [ ToDoItemComponent, ToDoListComponent, SearchComponent, CreateToDoComponent ],
  providers:    [ ToDoStateService ]
})
export class ToDoModule { }