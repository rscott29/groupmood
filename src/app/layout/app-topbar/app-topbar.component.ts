import { Component } from '@angular/core';
import {AppMainComponent} from '../app-main/app-main.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.scss']
})
export class AppTopbarComponent  {

  activeItem: number | undefined;

  constructor(public app: AppMainComponent) {}

  mobileMegaMenuItemClick(index: any): void {
    this.app.megaMenuMobileClick = true;
    this.activeItem = this.activeItem === index ? null : index;
  }

}
