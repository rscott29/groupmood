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
import { SpotifyComponent } from './spotify/spotify.component';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {AngularFireFunctions, AngularFireFunctionsModule} from '@angular/fire/functions';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthInterceptor} from './interceptors/http-request.interceptor';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    SpotifyComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    AppRoutingModule,



  ],
  providers: [

    AngularFireFunctions,
    AngularFireAuth,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
