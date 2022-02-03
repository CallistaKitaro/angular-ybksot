import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  heroForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.heroForm = this.formBuilder.group({
      id: 0,
      name: ['', [Validators.required]],
      strength: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('heroId'));

    this.selectedHero = this.heroService
      .getHeroes()
      .find((hero) => hero.id === heroIdFromRoute);

    if (this.selectedHero !== undefined) {
      this.heroForm.reset({
        id: this.selectedHero.id,
        name: this.selectedHero.name,
        strength: this.selectedHero.strength,
      });
    }
  }

  back(): void {
    this.location.back();
  }

  onChange(heroForm: FormGroup): void {
    if (heroForm.value.name !== '' && heroForm.value.strength !== '') {
      var updatedHero: Hero = {
        id: heroForm.value.id,
        name: heroForm.value.name,
        strength: heroForm.value.strength,
      };
      this.heroService.setHero(updatedHero);
    }
  }
}
