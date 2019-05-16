import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferPage } from './offer';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    OfferPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferPage),
    PipesModule
  ],
  exports : [
    OfferPage
  ]
})
export class OfferPageModule {}
