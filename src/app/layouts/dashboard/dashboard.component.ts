import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigChart = {}
  cards = {}
  pieChart = {}
  table = {}
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart()
    this.cards = this.dashboardService.cards()
    this.pieChart = this.dashboardService.pieChart()
    this.table = this.dashboardService.table()
  }

}
