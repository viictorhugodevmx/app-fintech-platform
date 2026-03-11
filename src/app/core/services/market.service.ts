import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  price = signal(67420);

  constructor() {
    this.startSimulation();
  }

  startSimulation() {

    setInterval(() => {

      const change = Math.random() * 200 - 100;

      const newPrice = this.price() + change;

      this.price.set(Math.max(65000, Math.round(newPrice)));

    }, 1500);

  }

}
