import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {OverzichtComponent} from './overzicht.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OverzichtComponent
  ],
  exports: [
    OverzichtComponent
  ]
})

export class OverzichtModule {
  constructor() {}
}
