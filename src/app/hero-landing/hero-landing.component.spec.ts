import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLandingComponent } from './hero-landing.component';

describe('HeroLandingComponent', () => {
  let component: HeroLandingComponent;
  let fixture: ComponentFixture<HeroLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
