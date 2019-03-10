import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSelectionComponent } from './customer-selection.component';

describe('CustomerSelectionComponent', () => {
  let component: CustomerSelectionComponent;
  let fixture: ComponentFixture<CustomerSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
