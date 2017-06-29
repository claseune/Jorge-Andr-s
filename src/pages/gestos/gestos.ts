import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GestosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gestos',
  templateUrl: 'gestos.html',
})
export class GestosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
swipe: number=0;
tap: number=0;
press: number=0;

swipeEvent(event: string)
{
  this.swipe++
console.log(this.swipe)
}
tapEvent(event)
{
  this.tap++
  console.log(this.tap)
}
pressEvent(event: string)
{
  this.press++
console.log(this.press)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestosPage');
  }

}
