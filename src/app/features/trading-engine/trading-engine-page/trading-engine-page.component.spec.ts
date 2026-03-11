import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingEnginePageComponent } from './trading-engine-page.component';

describe('TradingEnginePageComponent', () => {
  let component: TradingEnginePageComponent;
  let fixture: ComponentFixture<TradingEnginePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingEnginePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingEnginePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
