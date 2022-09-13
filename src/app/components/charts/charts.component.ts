import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  Chart,
  registerables,
  ChartConfiguration,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  ChartType,
  Title,
} from 'chart.js';
import * as moment from 'moment';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  myChart: any;
  viewCanvas = true;
  labels = this.latestMonths();
  public lineChartType: ChartType = 'line';

  data = {
    labels: this.labels,
    datasets: [
      {
        label: 'Ventas de los ultimos meses',
        backgroundColor: 'rgb(0, 102, 255)',
        borderColor: 'rgb(0, 102, 255)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  config = {
    type: this.lineChartType,
    data: this.data,
    options: {
      tension: 0.5,
      responsive: true,
      aspectRatio: 1,
      maintainAspectRatio: false,
    },
  };
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.viewCanvas = false;
    setTimeout(() => {
      this.viewCanvas = true;
    }, 50);
    setTimeout(() => {
      this.myChart = new Chart(
        document.getElementById('myChart') as HTMLCanvasElement,
        this.config
      );
    }, 150);
  }

  latestMonths() {
    var months = [];
    for (let index = 5; index >= 0; index--) {
      months.push(moment().subtract(index, 'months').format('MMMM').split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '));
    }
    return months;
  }
}
