import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  // in the future, this can be converted to data from some other source, such as a database
  data = {
    search: {
      placeholder: "Search by To-Do list"
    }
  };

  searchByToDos = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.subscribeToChangeSearchValue();
  }

  subscribeToChangeSearchValue() {
    this.searchByToDos.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {

      })
  }

  // I know this component won't die, I'm adding it for “best practice”
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}