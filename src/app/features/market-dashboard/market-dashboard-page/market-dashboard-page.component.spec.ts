import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDashboardPageComponent } from './market-dashboard-page.component';

describe('MarketDashboardPageComponent', () => {
  let component: MarketDashboardPageComponent;
  let fixture: ComponentFixture<MarketDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketDashboardPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
