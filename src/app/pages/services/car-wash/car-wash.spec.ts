import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWash } from './car-wash';

describe('CarWash', () => {
  let component: CarWash;
  let fixture: ComponentFixture<CarWash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarWash],
    }).compileComponents();

    fixture = TestBed.createComponent(CarWash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
