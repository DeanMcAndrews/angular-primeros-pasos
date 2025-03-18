import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacterById(characterId: string): void {
    this.dbzService.deleteCharacterById(characterId);
  }

  onAddCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
