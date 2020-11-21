import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppMainComponent} from './layout/app-main/app-main.component';
import {SpotifyComponent} from './spotify/spotify.component';

const routes: Routes = [
  { path: '', component: AppMainComponent,
    children: [
      { path: 'spotify', component: SpotifyComponent }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
