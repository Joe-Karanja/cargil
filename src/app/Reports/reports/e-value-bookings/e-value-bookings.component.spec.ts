import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EValueBookingsComponent } from './e-value-bookings.component';

describe('EValueBookingsComponent', () => {
  let component: EValueBookingsComponent;
  let fixture: ComponentFixture<EValueBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EValueBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EValueBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
