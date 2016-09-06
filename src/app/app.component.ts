import { Component } from '@angular/core';
const template = require('./app.component.pug');

@Component({
  selector: 'my-app',
  template: template(),
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
}