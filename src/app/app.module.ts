import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {DatosPage} from '../pages/datos/datos'
import {GestosPage} from '../pages/gestos/gestos';
import {LoginPage} from '../pages/login/login';
import {MostradatosPage} from '../pages/mostradatos/mostradatos';
import {RespuestasPage} from '../pages/respuestas/respuestas';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig={ 
    apiKey: "AIzaSyACuj6_zxaxCdbkXSUIBJ3Q5YF2Pnf2zsw",
    authDomain: "semiproyecto-9754b.firebaseapp.com",
    databaseURL: "https://semiproyecto-9754b.firebaseio.com",
    projectId: "semiproyecto-9754b",
    storageBucket: "semiproyecto-9754b.appspot.com",
    messagingSenderId: "817229679494"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatosPage,
    GestosPage,
    LoginPage,
    MostradatosPage,
    RespuestasPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
        DatosPage,
    GestosPage,
    LoginPage,
    MostradatosPage,
    RespuestasPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
