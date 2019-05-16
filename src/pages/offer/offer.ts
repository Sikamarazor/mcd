import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

/**
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {

  valuesV : any;
  maxtime: any = 30;
  countDown;
  counter = 300;
  tick = 1000;
  val : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.val = navParams.get('val');
    this.valuesV = 1;

  }

  redeem(){


      // Object.keys(this.cards).forEach(key => {
      //   console.log(key);

      //   console.log(this.cards[key].maskedCardNo);
      // });

    let modal = this.modalCtrl.create('OfferModalPage', {

    }, {
        showBackdrop: false,
        enableBackdropDismiss: false
      });
      let me = this;
      modal.onDidDismiss(data => {
        if(data == "Yes")
        {


          setTimeout(() => {
            this.countDown = Observable.timer(0, this.tick)
              .take(this.counter)
              .map(() => --this.counter);

            this.valuesV = 2;
            console.log(data);
          }, 1700);
        }
        else {
          this.valuesV = 1;
        }



      });
      modal.present();

  }

  gotoTut(){
    this.navCtrl.push('TutorialPage');
  }
  gotoTerms() {
    this.navCtrl.push('TcPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
  }

}
