/*Angular Modules*/
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';


/*Self made Modules*/



/*Self made Components*/
import {BonnetjesComponent} from './bonnetjes.component';


@NgModule({
  /** Imports: these modules are used by this module*/
  imports: [
    CommonModule
  ],
  /** Declarations: make these components usable by this module*/
  declarations: [
    BonnetjesComponent
  ],
  /** Exports: these components will be available outside of this Module*/
  exports: [
    BonnetjesComponent
  ],
  /**Bootstrap: */
})
export class BonnetjesModule { }
