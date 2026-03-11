import { Component, inject } from '@angular/core';
import { MarketService } from '../../../core/services/market.service';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card.component';
import { MarketChartComponent } from '../../../shared/components/market-chart/market-chart.component';
@Component({
  selector: 'app-market-dashboard-page',
  imports: [StatCardComponent, MarketChartComponent],
  templateUrl: './market-dashboard-page.component.html',
  styleUrl: './market-dashboard-page.component.scss'
})
export class MarketDashboardPageComponent {
  market = inject(MarketService);
}
