import { ButtonUiModule } from './../../core/@ui-component/button-ui/button-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { CardModule } from 'src/app/core/@ui-component/card/card.module';
import { UserRoutingModule } from './UserRoutingModule';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    UserRoutingModule
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UsersModule { }
