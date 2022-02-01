import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hero-nav',
  templateUrl: './hero-nav.component.html',
  styleUrls: ['./hero-nav.component.css'],
})
export class HeroNavComponent implements OnInit {
  @Input() navigation: String | undefined;

  constructor() {}

  ngOnInit(): void {}
}
