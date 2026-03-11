import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookPageComponent } from './order-book-page.component';

describe('OrderBookPageComponent', () => {
  let component: OrderBookPageComponent;
  let fixture: ComponentFixture<OrderBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderBookPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
