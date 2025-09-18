import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customIncrement, toggleCustomInput } from '../states/counter.actions';; // NgIf is deprecated, use @if block in template instead

@Component({
  selector: 'app-custom-input',
  imports: [FormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css'
})
export class CustomInput  implements OnInit {
  constructor(
    private store: Store<{ counter: CounterState }>
  ) {}
  customValue: number = 0;
  showCustomInput: boolean = false;

  ngOnInit() {
    this.store.select('counter').subscribe((data) => {
      console.log('Toggle Observable Changed: ', data);
      this.showCustomInput = data.toggle;
    });
  }

  onCustomValueButtonClicked() {
    // Dispatch an action to increment the counter by the specified value
    this.store.dispatch(customIncrement({ value: +this.customValue }));
  }

  onToggleClicked() {
    this.store.dispatch(toggleCustomInput());
  }

}
