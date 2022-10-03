import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonUiComponent } from './button-ui.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonUiComponent],
  exports:[ButtonUiComponent]
})
export class ButtonUiModule { }
