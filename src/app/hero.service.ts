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
  heroes = [
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
  ];
  constructor() {}

  getHeroes() {
    return this.heroes;
  }
}
