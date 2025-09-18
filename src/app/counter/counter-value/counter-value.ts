import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CounterState } from '../states/counter.state';
import { getCounter } from '../states/counter.selector';

@Component({
  selector: 'app-counter-value',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css'
})
export class CounterValue implements OnInit{
  constructor(
    private store: Store<{ counter: CounterState }>
  ) {}
  counter$: Observable<number> | null = null;
  
  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
  }

}
