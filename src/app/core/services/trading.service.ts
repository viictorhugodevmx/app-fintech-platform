import { Injectable, signal } from '@angular/core';

export interface Order {
  type: 'buy' | 'sell';
  price: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class TradingService {

  orders = signal<Order[]>([]);

  portfolio = signal({
    btc: 1.24,
    usd: 50000
  });

  placeOrder(order: Order) {

    this.orders.update(list => [...list, order]);

    if (order.type === 'buy') {

      this.portfolio.update(p => ({
        btc: p.btc + order.amount,
        usd: p.usd - order.amount * order.price
      }));

    }

    if (order.type === 'sell') {

      this.portfolio.update(p => ({
        btc: p.btc - order.amount,
        usd: p.usd + order.amount * order.price
      }));

    }

  }

}
