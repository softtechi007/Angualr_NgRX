import { Component } from '@angular/core';
import { CounterButton } from './counter-button/counter-button';
import { CounterValue } from './counter-value/counter-value';
import { CustomInput } from "./custom-input/custom-input";

@Component({
  selector: 'app-counter',
  imports: [CounterButton, CounterValue, CustomInput],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  counter: number = 0;

  incrementCount() {
    this.counter++;
  }
  
  decrementCount() {
    this.counter--;
  }
  
  resetCount() {
    this.counter = 0;
  }
}
