import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../hero.service';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.css'],
})
export class HeroesDashboardComponent implements OnInit {
  topHeroes: Hero[];
  dashTitle = 'Tour of Heroes';

  constructor(private heroService: HeroService) {
    this.topHeroes = this.heroService
      .getHeroes()
      .map((hero) => hero)
      .sort(function (heroA, heroB) {
        return heroB.strength - heroA.strength;
      })
      .slice(0, 4);
  }

  ngOnInit(): void {}
}
