import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-market-chart',
  standalone: true,
  templateUrl: './market-chart.component.html',
  styleUrl: './market-chart.component.scss'
})
export class MarketChartComponent implements AfterViewInit {

  @ViewChild('chart') chartRef!: ElementRef;

  ngAfterViewInit() {

    new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['1m','2m','3m','4m','5m','6m'],
        datasets: [{
          label: 'BTC Price',
          data: [67420, 67380, 67410, 67490, 67520, 67470],
          borderColor: '#22c55e',
          tension: 0.3
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        }
      }
    });

  }

}
