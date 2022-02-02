import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { HeroService, Hero } from '../hero.service';

export class HeroDetailFormValidation {
  name: boolean;
  strength: boolean;
  errorMessage: string;

  constructor() {
    this.name = true;
    this.strength = true;
    this.errorMessage = '';
  }
}

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  dashTitle = 'Tour of Heroes';
  selectedHero: Hero | undefined;
  heroDetailForm = this.formBuilder.group({
    name: String,
    strength: Number,
  });

  heroDetailFormValidation = new HeroDetailFormValidation();

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('heroId'));

    this.selectedHero = this.heroService
      .getHeroes()
      .find((hero) => hero.id === heroIdFromRoute);
  }

  back(): void {
    this.location.back();
  }

  onChange(hero: Hero) {
    //check mandatory field
    this.heroDetailFormValidation.name = hero.name !== '';
    this.heroDetailFormValidation.strength = Number(hero.strength) !== 0;

    debugger;
    if (
      this.heroDetailFormValidation.name &&
      this.heroDetailFormValidation.strength
    ) {
      this.heroService.setHero(hero);
    }
  }
}
