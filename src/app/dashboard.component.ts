import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
const template = require('./dashboard.component.pug');

@Component({
  selector: 'my-dashboard',
  template: template(),
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit { 
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then((data) => this.heroes = data.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}