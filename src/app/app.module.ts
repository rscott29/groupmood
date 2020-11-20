import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './layout/app-main/app-main.component';
import { AppMenuComponent } from './layout/app-menu/app-menu.component';
import { AppRightpanelComponent } from './layout/app-rightpanel/app-rightpanel.component';
import { AppBreadcrumbComponent } from './layout/app-breadcrumb/app-breadcrumb.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppTopbarComponent } from './layout/app-topbar/app-topbar.component';
import {CalendarModule} from 'primeng/calendar';
import {MenuService} from './layout/app-menu/menuService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuModule} from 'primeng/menu';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenubarModule} from 'primeng/menubar';
import {AppMenuitemComponent} from './layout/app-menu/app.menuitem.component';
import {BreadcrumbService} from './layout/app-breadcrumb/breadcrumb.service';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppMenuComponent,
    AppRightpanelComponent,
    AppBreadcrumbComponent,
    AppFooterComponent,
    AppMenuitemComponent,
    AppTopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule,
    CheckboxModule,


  ],
  providers: [
    MenuService,
    BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
