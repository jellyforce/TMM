/*Angular Modules*/
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


/*Self made Modules*/



/*Self made Components*/
import {UitgavenComponent} from './uitgaven.component';
import {UitgavenToevoegenComponent} from './uitgaven.toevoegen.component';

@NgModule({
  /** Imports: these modules are used by this module*/
  imports: [
    CommonModule,
    RouterModule
  ],
  /** Declarations: make these components usable by this module*/
  declarations: [
    UitgavenComponent,
    UitgavenToevoegenComponent
  ],
  /** Exports: these components will be available outside of this Module*/
  exports: [
  ],
  /**Bootstrap: */
})
export class BonnetjesModule { }
