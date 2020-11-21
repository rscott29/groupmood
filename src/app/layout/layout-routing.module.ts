import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SpotifyComponent} from '../spotify/spotify.component';
import {AppMainComponent} from './app-main/app-main.component';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    children: [
      {path: 'spotify', component: SpotifyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule{ }
