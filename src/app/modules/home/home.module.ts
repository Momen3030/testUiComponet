import { CardModule } from './../../core/@ui-component/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './homeRoutingModule';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
  ,exports:[HomeComponent]
})
export class HomeModule { }
