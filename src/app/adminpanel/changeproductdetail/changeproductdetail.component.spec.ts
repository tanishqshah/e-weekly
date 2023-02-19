import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeproductdetailComponent } from './changeproductdetail.component';

describe('ChangeproductdetailComponent', () => {
  let component: ChangeproductdetailComponent;
  let fixture: ComponentFixture<ChangeproductdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeproductdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
