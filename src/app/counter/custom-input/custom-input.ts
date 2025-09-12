import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customIncrement } from '../states/counter.actions';

@Component({
  selector: 'app-custom-input',
  imports: [FormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css'
})
export class CustomInput {
  constructor(
    private store: Store<{ counter: CounterState }>
  ) {}
  customValue: number = 0;

  onCustomValueButtonClicked() {
    // Dispatch an action to increment the counter by the specified value
    this.store.dispatch(customIncrement({ value: +this.customValue }));
  }

}
