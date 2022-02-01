import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {
  dashTitle = 'Tour of Heroes';
  heroes = this.heroService.getHeroes();

  constructor(private heroService: HeroService) {}
}
