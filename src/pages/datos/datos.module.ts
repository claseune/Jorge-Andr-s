import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosPage } from './datos';

@NgModule({
  declarations: [
    DatosPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosPage),
  ],
  exports: [
    DatosPage
  ]
})
export class DatosPageModule {}
