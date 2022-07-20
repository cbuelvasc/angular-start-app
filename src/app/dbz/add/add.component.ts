import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  @Input() character: Character = {
    name: '',
    power: 0,
  };

  constructor(private dbzService: DbzService) {}

  addCharacter(): void {
    if (this.character.name.trim().length === 0) {
      return;
    }
    this.dbzService.addCharacter(this.character);
    this.character = {
      name: '',
      power: 0,
    };
  }
}
