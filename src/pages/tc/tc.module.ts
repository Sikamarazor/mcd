import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TcPage } from './tc';

@NgModule({
  declarations: [
    TcPage,
  ],
  imports: [
    IonicPageModule.forChild(TcPage),
  ],
  exports : [
    TcPage
  ]
})
export class TcPageModule {}
