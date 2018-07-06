import {Component, OnInit} from '@angular/core';

declare const $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  bSideNav = false;
  bDashboard = false;

  constructor() { }

  ngOnInit() {
  }
}
