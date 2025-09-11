import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-value',
  imports: [],
  standalone: true,
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css'
})
export class CounterValue {
  @Input() count: number = 10;
}
