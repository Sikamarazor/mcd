import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the OfferModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-modal',
  templateUrl: 'offer-modal.html',
})
export class OfferModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
  }

  selectCards(x) {
    console.log(x)
    this.viewCtrl.dismiss(x);
  }
  onContinue() {
    this.viewCtrl.dismiss("Yes");


      let loading = this.loadingCtrl.create({
        content: 'Redeeming...'
      });

      loading.present();

      setTimeout(() => {
        loading.dismiss();
      }, 2000);

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferModalPage');
  }

}
