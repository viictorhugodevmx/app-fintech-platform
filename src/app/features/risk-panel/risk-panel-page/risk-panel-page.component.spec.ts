import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPanelPageComponent } from './risk-panel-page.component';

describe('RiskPanelPageComponent', () => {
  let component: RiskPanelPageComponent;
  let fixture: ComponentFixture<RiskPanelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskPanelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
