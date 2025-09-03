import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side/side-menu.component';

@Component({
  selector: 'app-dashboard-pages',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-pages.component.html',
  styleUrl: './dashboard-pages.component.css',
})
export default class DashboardPagesComponent {}
