import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  imports: [],
  standalone: true,
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css'
})
export class CounterButton {
  @Output()
  incrementClicked: EventEmitter<void> = new EventEmitter<void>();
  
  @Output()
  decrementClicked: EventEmitter<void> = new EventEmitter<void>();
  
  @Output()
  resetClicked: EventEmitter<void> = new EventEmitter<void>();

  onIncrement() {
    // Handle increment logic
    this.incrementClicked.emit();
  }

  onDecrement() {
    // Handle decrement logic
    this.decrementClicked.emit();
  }

  onReset() {
    // Handle reset logic
    this.resetClicked.emit();
  }
}
