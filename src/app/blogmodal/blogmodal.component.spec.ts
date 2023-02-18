import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogmodalComponent } from './blogmodal.component';

describe('BlogmodalComponent', () => {
  let component: BlogmodalComponent;
  let fixture: ComponentFixture<BlogmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
