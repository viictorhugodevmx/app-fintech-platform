import { Component, inject } from '@angular/core';
import { TradingService } from '../../../core/services/trading.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order-book-page',
  imports: [CommonModule],
  templateUrl: './order-book-page.component.html',
  styleUrl: './order-book-page.component.scss'
})
export class OrderBookPageComponent {
  trading = inject(TradingService);
}
