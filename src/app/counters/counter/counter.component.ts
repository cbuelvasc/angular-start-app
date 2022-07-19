import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      Initial value: <strong>{{ initial }}</strong>
    </h3>
    <button (click)="accumulate(-initial)">-{{ initial }}</button>
    <span>{{ number }}</span>
    <button (click)="accumulate(initial)">+{{ initial }}</button>
  `,
})
export class CounterComponent {
  title: string = 'Counter App';
  number: number = 0;
  initial: number = 5;

  accumulate(value: number) {
    this.number += value;
  }
}
