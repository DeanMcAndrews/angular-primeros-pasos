import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroesNames: string[] = [
    'Spider-Man',
    'Black-Cat',
    'Namor',
    'Captain-America',
    'Vision',
    'Iron Man',
    'Hawkeye',
    'Hulk',
    'Thor',
    'Wolverine',
    'Psylocke',
    'Cyclops',
    'Storm',
    'Beast',
    'Rogue',
    'Gambit',
    'Nightcrawlwer',
    'Colossus',
    'Iceman',
    'Jean Grey',
    'Scarlet Witch',
    'Quicksilver',
    'Dazzler',
    'She-Hulk',
    'Doctor Strange',
    'Black Panther',
    'Captain Marvel',
    'Black Widow',
    'Falcon',
    'Winter Soldier',
    'War Machine',
  ];
  public deletedHero?: string = '';

  public removeLastHero(): void {
    this.deletedHero = this.heroesNames.pop();
    console.log(`Deleted hero: '${this.deletedHero}'`);
  }
}
