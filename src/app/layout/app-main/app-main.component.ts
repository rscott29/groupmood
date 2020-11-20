import {Component, OnInit, Renderer2} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MenuService} from '../app-menu/menuService';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss'],
  animations: [
    trigger('mask-anim', [
      state('void', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 0.8
      })),
      transition('* => *', animate('250ms cubic-bezier(0, 0, 0.2, 1)'))
    ])
  ]
})
export class AppMainComponent implements OnInit {

  horizontalMenu: boolean | undefined;
  darkMode = false;
  menuColorMode = 'light';
  menuColor = 'layout-menu-light';
  rightPanelClick: boolean | undefined;
  rightPanelActive: boolean | undefined;
  menuClick: boolean | undefined;
  staticMenuActive: boolean | undefined;
  menuMobileActive: boolean | undefined;
  megaMenuClick: boolean | undefined;
  megaMenuActive: boolean | undefined;
  megaMenuMobileClick: boolean | undefined;
  megaMenuMobileActive: boolean | undefined;
  topbarItemClick: boolean | undefined;
  topbarMobileMenuClick: boolean | undefined;
  topbarMobileMenuActive: boolean | undefined;
  sidebarActive: boolean | undefined;
  activeTopbarItem: any | undefined;
  topbarMenuActive: boolean | undefined;
  menuHoverActive: boolean | undefined;
  configActive: boolean | undefined;
  configClick: boolean | undefined;
  ripple = true;
  inputStyle = 'outlined';

  constructor(
    public renderer: Renderer2,
    private menuService: MenuService,
    private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  onLayoutClick(): void {
    if (!this.topbarItemClick) {
      this.activeTopbarItem = null;
      this.topbarMenuActive = false;
    }

    if (!this.rightPanelClick) {
      this.rightPanelActive = false;
    }

    if (!this.megaMenuClick) {
      this.megaMenuActive = false;
    }

    if (!this.megaMenuMobileClick) {
      this.megaMenuMobileActive = false;
    }

    if (!this.menuClick) {
      if (this.isHorizontal()) {
        this.menuService.reset();
      }

      if (this.menuMobileActive) {
        this.menuMobileActive = false;
      }

      this.menuHoverActive = false;
    }

    if (this.configActive && !this.configClick) {
      this.configActive = false;
    }

    this.configClick = false;
    this.menuClick = false;
    this.topbarItemClick = false;
    this.megaMenuClick = false;
    this.megaMenuMobileClick = false;
    this.rightPanelClick = false;
  }

  onMegaMenuButtonClick(event: any): void {
    this.megaMenuClick = true;
    this.megaMenuActive = !this.megaMenuActive;
    event.preventDefault();
  }

  onMegaMenuClick(event: any): void {
    this.megaMenuClick = true;
    event.preventDefault();
  }

  onTopbarItemClick(event: any, item: any): void {
    this.topbarItemClick = true;

    if (this.activeTopbarItem === item) {
      this.activeTopbarItem = null;
    } else {
      this.activeTopbarItem = item;
    }

    event.preventDefault();
  }

  onRightPanelButtonClick(event: any): void {
    this.rightPanelClick = true;
    this.rightPanelActive = !this.rightPanelActive;

    event.preventDefault();
  }

  onRightPanelClose(event: any): void {
    this.rightPanelActive = false;
    this.rightPanelClick = false;

    event.preventDefault();
  }

  onRightPanelClick(event: any): void {
    this.rightPanelClick = true;

    event.preventDefault();
  }

  onTopbarMobileMenuButtonClick(event: any): void {
    this.topbarMobileMenuClick = true;
    this.topbarMobileMenuActive = !this.topbarMobileMenuActive;

    event.preventDefault();
  }

  onMegaMenuMobileButtonClick(event: any): void {
    this.megaMenuMobileClick = true;
    this.megaMenuMobileActive = !this.megaMenuMobileActive;

    event.preventDefault();
  }

  onMenuButtonClick(event: any): void {
    this.menuClick = true;
    this.topbarMenuActive = false;

    if (this.isMobile()) {
      this.menuMobileActive = !this.menuMobileActive;
    }

    event.preventDefault();
  }

  onSidebarClick(event: Event): void {
    this.menuClick = true;
  }

  onToggleMenuClick(event: Event): void {
    this.staticMenuActive = !this.staticMenuActive;
    event.preventDefault();
  }

  onConfigClick(event: any): void {
    this.configClick = true;
  }

  onRippleChange(event: any): void {
    this.ripple = event.checked;
  }

  isDesktop(): boolean {
    return window.innerWidth > 991;
  }

  isMobile(): boolean {
    return window.innerWidth <= 991;
  }

  isHorizontal(): boolean {
    return this.horizontalMenu === true;
  }

}
