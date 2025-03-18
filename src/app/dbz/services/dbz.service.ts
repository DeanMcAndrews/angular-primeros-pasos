import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Kulilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 10500,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };

    this.characters.push(newCharacter);
    // console.log('MainPage');
    // console.log(character);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(characterId: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== characterId
    );
  }
}
