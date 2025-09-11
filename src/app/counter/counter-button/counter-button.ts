import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../states/counter.actions';
import { CounterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-button',
  imports: [],
  standalone: true,
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css'
})
export class CounterButton {
  constructor(
    private store: Store<{ counter: CounterState }>
  ) {}
  onIncrement() {
    // Handle increment logic
    this.store.dispatch(increment());
  }

  onDecrement() {
    // Handle decrement logic
    this.store.dispatch(decrement());
  }

  onReset() {
    // Handle reset logic
    this.store.dispatch(reset());
  }
}
