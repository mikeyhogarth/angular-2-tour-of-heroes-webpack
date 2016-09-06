import { ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../../src/app/app.component';
import { createFixture } from '../testHelpers';

describe('App', () => {
  let fixture : ComponentFixture<any>;
  beforeEach(() => {
    fixture = createFixture(AppComponent);  
  });
  describe('#constructor', () => {
    it ('should work', () => {
      expect(fixture.componentInstance instanceof AppComponent).toBe(true);
    });
  });
});