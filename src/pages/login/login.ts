import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from
'angularfire2/database';
import { RespuestasPage } from '../respuestas/respuestas'
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 items: FirebaseListObservable<any[]>;
 private data: FormGroup;
constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,public formBuilder: FormBuilder,
   ) {

    this.data = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  })
  }

login() {

    firebase.auth().signInWithEmailAndPassword(this.data.controls['username'].value, this.data.controls['password'].value)
      .then((response) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (!user.emailVerified) {
            user.sendEmailVerification();
          }
        })
        console.log(response);
        this.navCtrl.setRoot(RespuestasPage);
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
    signInWithFacebook()
    {
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    
      .then(res=>console.log(res));
    }
  
}
