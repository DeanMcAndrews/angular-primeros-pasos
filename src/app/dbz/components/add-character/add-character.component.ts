import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0,
  };

  @Output('onAdd')
  public onAdd: EventEmitter<Character> = new EventEmitter<Character>();

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.trim().length === 0) return;
    this.onAdd.emit(this.character);
    this.character = { name: '', power: 0 };
    // debugger;
    // console.log('AddCharacter');
  }
}
