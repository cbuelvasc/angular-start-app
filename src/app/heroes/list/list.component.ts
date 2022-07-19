import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Superman'];
  deletedHeroe: string = '';

  deleteHeroe(): void {
    this.deletedHeroe = this.heroes.shift() || '';
  }
}
