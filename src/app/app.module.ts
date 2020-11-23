import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SpotifyComponent } from './spotify/spotify.component';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {AngularFireFunctions, AngularFireFunctionsModule} from '@angular/fire/functions';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthInterceptor} from './interceptors/http-request.interceptor';
import {SharedModule} from './shared/shared.module';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {FormatSelectItemPipe} from './pipes/FormatSelectItemPipe';




@NgModule({
  declarations: [
    AppComponent,
    SpotifyComponent,
    FormatSelectItemPipe
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
    SlideMenuModule,
    ListboxModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    ButtonModule,



  ],
  providers: [

    AngularFireFunctions,
    AngularFireAuth,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

  ],
  exports: [
    FormatSelectItemPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
