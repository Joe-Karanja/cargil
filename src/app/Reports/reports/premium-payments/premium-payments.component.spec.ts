import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumPaymentsComponent } from './premium-payments.component';

describe('PremiumPaymentsComponent', () => {
  let component: PremiumPaymentsComponent;
  let fixture: ComponentFixture<PremiumPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
