import { Injectable } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
  ];

  new: Character = {
    name: '',
    power: 0,
  };

  get characters(): Character[] {
    return [...this._characters];
  }

  constructor() {}

  addCharacter(character: Character) {
    this._characters.push(character);
  }
}
