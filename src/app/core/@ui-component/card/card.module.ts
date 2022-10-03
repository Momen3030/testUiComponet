import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ButtonUiModule } from '../button-ui/button-ui.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonUiModule
  ],
  declarations: [CardComponent ],
  exports: [CardComponent ],
})
export class CardModule { }
