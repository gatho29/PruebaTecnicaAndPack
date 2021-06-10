import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

@Output('search') searchEmittter = new EventEmitter<string>();
searchSubscription: Subscription;
search = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.searchUsers();
  }

  ngOnDestroy(): void {
    this.searchSubscription && this.searchSubscription.unsubscribe();
  }


  searchUsers(): void {
    this.searchSubscription = this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => this.searchEmittter.emit(value));
  }
}
