import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { TradingService } from '../../../core/services/trading.service';

@Component({
  selector: 'app-trading-engine-page',
  imports: [],
  templateUrl: './trading-engine-page.component.html',
  styleUrl: './trading-engine-page.component.scss'
})
export class TradingEnginePageComponent {
  trading = inject(TradingService);

  buy(price: number, amount: number) {

    this.trading.placeOrder({
      type: 'buy',
      price,
      amount
    });

  }

  sell(price: number, amount: number) {

    this.trading.placeOrder({
      type: 'sell',
      price,
      amount
    });

  }
}
