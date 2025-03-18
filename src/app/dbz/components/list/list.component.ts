import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input('charactersList')
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter<number>();
  public onDelete: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacterById(characterId?: string): void {
    if (!characterId) {
      return;
    }

    // console.log(characterId);

    this.onDelete.emit(characterId);
  }

  // onDeleteCharacter(index: number): void {
  //   // emitir del ID del personaje
  //   // console.log(index);
  //   this.onDelete.emit(index);
  // }
}
