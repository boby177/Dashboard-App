import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  chartOptions = {}
    @Input() data:any = []
    
    Highcharts = Highcharts

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Stacked bar chart'
      },
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Total fruit consumption'
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, 2, 5]
      }]
  }
  HC_exporting(Highcharts);
  
      setTimeout(() => {
          window.dispatchEvent(
              new Event('resize')
          )
      }, 300);
  }
}