import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoOffer(val){
    console.log(val);
    console.log("Hey");
    this.navCtrl.push('OfferPage',{
      val : val
    });
  }

}
