import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GestosPage} from '../gestos/gestos';
import {LoginPage} from '../login/login';
import {DatosPage} from '../datos/datos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

load()
  {
this.navCtrl.push(GestosPage,
{
val: 'true'
})
  }

  loadLogin()
  {
this.navCtrl.push(LoginPage,
{
val: 'true'
})
  }

  loadDatos()
  {
this.navCtrl.push(DatosPage,
{
val: 'true'
})
  }
}
