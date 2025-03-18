import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  exports: [HeroComponent, ListComponent],
  imports: [CommonModule],
  declarations: [HeroComponent, ListComponent],
})
export class HeroesModule {}
