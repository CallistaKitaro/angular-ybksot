export interface Hero {
  id: number;
  name: string;
  strength: number;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes = [
    {
      id: 1,
      name: 'Mr.Nice',
      strength: 13,
    },
    {
      id: 2,
      name: 'Boombastic',
      strength: 50,
    },
    {
      id: 3,
      name: 'Weakling',
      strength: 5,
    },
    {
      id: 4,
      name: 'Thor',
      strength: 80,
    },
    {
      id: 5,
      name: 'Arrow guy',
      strength: 30,
    },
    {
      id: 6,
      name: 'Spice gorl',
      strength: 77,
    },
  ];
  constructor() {}

  getHeroes() {
    return this.heroes;
  }

  setHero(hero: Hero) {
    this.heroes.find((current) => {
      if (current.id === hero.id) {
        current.name = hero.name;
        current.strength = hero.strength;
      }
    });
  }
}
