import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  NgForm,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  heroForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('heroId'));

    this.selectedHero = this.heroService
      .getHeroes()
      .find((hero) => hero.id === heroIdFromRoute);

    if (this.selectedHero !== undefined) {
      this.heroForm = this.formBuilder.group({
        id: new FormControl(this.selectedHero.id),
        name: new FormControl(this.selectedHero.name, [Validators.required]),
        strength: new FormControl(this.selectedHero.strength, [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.min(1),
        ]),
      });
    }
  }

  back(): void {
    this.location.back();
  }

  onChange(heroForm: FormGroup): void {
    console.log(heroForm);
    if (heroForm.valid) {
      var updatedHero: Hero = {
        id: heroForm.value.id,
        name: heroForm.value.name.trim(),
        strength: parseInt(heroForm.value.strength.trim(), 10),
      };
      this.heroService.setHero(updatedHero);
    }
  }
}
