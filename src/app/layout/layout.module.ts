import {NgModule} from '@angular/core';
import {CalendarModule} from 'primeng/calendar';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MegaMenuModule} from 'primeng/megamenu';
import {CheckboxModule} from 'primeng/checkbox';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuService} from './app-menu/menuService';
import {BreadcrumbService} from './app-breadcrumb/breadcrumb.service';
import {AppMainComponent} from './app-main/app-main.component';
import {AppMenuComponent} from './app-menu/app-menu.component';
import {AppRightpanelComponent} from './app-rightpanel/app-rightpanel.component';
import {AppBreadcrumbComponent} from './app-breadcrumb/app-breadcrumb.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {AppMenuitemComponent} from './app-menu/app.menuitem.component';
import {AppTopbarComponent} from './app-topbar/app-topbar.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';


@NgModule({
  declarations: [
    AppMainComponent,
    AppMenuComponent,
    AppRightpanelComponent,
    AppBreadcrumbComponent,
    AppFooterComponent,
    AppMenuitemComponent,
    AppTopbarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    CalendarModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule,
    CheckboxModule,
    BreadcrumbModule
  ],
  providers: [
    MenuService,
    BreadcrumbService,
  ]
})

export class LayoutModule { }
