import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferModalPage } from './offer-modal';

@NgModule({
  declarations: [
    OfferModalPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferModalPage),
  ],
  exports : [
    OfferModalPage
  ]
})
export class OfferModalPageModule {}
