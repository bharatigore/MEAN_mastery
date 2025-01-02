import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchelistComponent } from './batchelist.component';

describe('BatchelistComponent', () => {
  let component: BatchelistComponent;
  let fixture: ComponentFixture<BatchelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
