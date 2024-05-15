import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalChargesComponent } from './total-charges.component';

describe('TotalChargesComponent', () => {
  let component: TotalChargesComponent;
  let fixture: ComponentFixture<TotalChargesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalChargesComponent]
    });
    fixture = TestBed.createComponent(TotalChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
