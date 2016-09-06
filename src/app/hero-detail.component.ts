import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
const template = require('./hero-detail.component.pug'); 

@Component({
  selector: 'my-hero-detail',
  template: template(),
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute) {
    }

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.heroService.getHero(id)
          .then((data) => this.hero = data)
      });
    }

    save(): void {
      this.heroService.update(this.hero)
        .then(this.goBack);
    }

    goBack(): void {
      window.history.back();
    }

    @Input() hero: Hero;
}