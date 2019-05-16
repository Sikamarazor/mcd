import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  showSkip = true;
  @ViewChild('slides') slides: Slides;
  index: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {

    this.slides.update();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

}
