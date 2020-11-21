import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [

    HttpClientModule,
    HttpClientJsonpModule,
  ],
  exports: [

    HttpClientModule,
    HttpClientJsonpModule,
  ]
})
export class SharedModule { }
