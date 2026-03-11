import { Routes } from '@angular/router';

import { MarketDashboardPageComponent } from './features/market-dashboard/market-dashboard-page/market-dashboard-page.component';
import { OrderBookPageComponent } from './features/order-book/order-book-page/order-book-page.component';
import { TradingEnginePageComponent } from './features/trading-engine/trading-engine-page/trading-engine-page.component';
import { PortfolioPageComponent } from './features/portfolio/portfolio-page/portfolio-page.component';
import { RiskPanelPageComponent } from './features/risk-panel/risk-panel-page/risk-panel-page.component';

export const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: MarketDashboardPageComponent },

  { path: 'order-book', component: OrderBookPageComponent },

  { path: 'trading', component: TradingEnginePageComponent },

  { path: 'portfolio', component: PortfolioPageComponent },

  { path: 'risk', component: RiskPanelPageComponent }

];
