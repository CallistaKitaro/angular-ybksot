import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { HeroService, Hero } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  dashTitle = 'Tour of Heroes';
  selectedHero: Hero | undefined;
  heroDetailForm = this.formBuilder.group({
    name: '',
    strength: 0,
  });

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
    this.heroService.setHero(hero);
  }
}
