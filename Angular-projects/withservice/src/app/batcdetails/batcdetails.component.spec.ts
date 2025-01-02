import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatcdetailsComponent } from './batcdetails.component';

describe('BatcdetailsComponent', () => {
  let component: BatcdetailsComponent;
  let fixture: ComponentFixture<BatcdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatcdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatcdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
