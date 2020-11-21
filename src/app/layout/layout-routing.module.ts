import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMainComponent} from './app-main/app-main.component';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule{ }
