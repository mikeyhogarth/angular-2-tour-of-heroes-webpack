import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from '../src/app/app.component';
import { HeroDetailComponent } from '../src/app/hero-detail.component';
import { HeroesComponent } from '../src/app/heroes.component';
import { DashboardComponent } from '../src/app/dashboard.component';
import { routing, appRoutes } from '../src/app/app.routing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideRoutes } from '@angular/router';
import { HeroSearchComponent } from '../src/app/hero-search.component';

export function createFixture(component:any) {
  TestBed.configureTestingModule({ 
    declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent],
    imports: [FormsModule, RouterTestingModule],
    providers: [provideRoutes(appRoutes)]
  });
  return TestBed.createComponent(component);  
}