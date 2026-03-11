import { Component } from '@angular/core';
import { inject, computed } from '@angular/core';
import { TradingService } from '../../../core/services/trading.service';
@Component({
  selector: 'app-risk-panel-page',
  imports: [],
  templateUrl: './risk-panel-page.component.html',
  styleUrl: './risk-panel-page.component.scss'
})
export class RiskPanelPageComponent {
  trading = inject(TradingService);

  exposure = computed(() => {

    const btc = this.trading.portfolio().btc;
    const price = 67420;

    return Math.round(btc * price);

  });

  leverage = computed(() => {

    const usd = this.trading.portfolio().usd;

    if (usd <= 0) return 3;

    return (100000 / usd).toFixed(2);

  });
}
