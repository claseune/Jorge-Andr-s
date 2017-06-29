import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostradatosPage } from './mostradatos';

@NgModule({
  declarations: [
    MostradatosPage,
  ],
  imports: [
    IonicPageModule.forChild(MostradatosPage),
  ],
  exports: [
    MostradatosPage
  ]
})
export class MostradatosPageModule {}
