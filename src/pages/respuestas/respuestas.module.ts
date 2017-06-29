import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RespuestasPage } from './respuestas';

@NgModule({
  declarations: [
    RespuestasPage,
  ],
  imports: [
    IonicPageModule.forChild(RespuestasPage),
  ],
  exports: [
    RespuestasPage
  ]
})
export class RespuestasPageModule {}
