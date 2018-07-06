import {Component, OnInit} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  bSideNav = true;

  constructor() {  }

  ngOnInit() {
  }


}
