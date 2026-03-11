import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { TradingService } from '../../../core/services/trading.service';
@Component({
  selector: 'app-portfolio-page',
  imports: [],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {
  trading = inject(TradingService);
}
