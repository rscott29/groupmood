import { Component, OnInit } from '@angular/core';
import {AppMainComponent} from '../app-main/app-main.component';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  model: any[] | undefined;

  constructor(public app: AppMainComponent) {}

  ngOnInit(): void {
    this.model = [
      {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
      {
        label: 'Spotify', icon: 'pi pi-fw pi-star', routerLink: ['/'],
        items: [
          {label: 'Login', icon: 'pi pi-fw pi-id-card', routerLink: ['/']},
          {label: 'Dashboard', icon: 'pi pi-fw pi-check-square', routerLink: ['/spotify']},
        ]
      },
      {
        label: 'Feature Requests', icon: 'pi pi-fw pi-file', routerLink: ['/documentation']
      }
    ];
  }

  onMenuClick(): void {
    this.app.menuClick = true;
  }
}
