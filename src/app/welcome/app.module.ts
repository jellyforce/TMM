import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  /** Declarations: make these components usable by other parts of the app*/
  declarations: [
    AppComponent
  ],
  /** Imports: these modules are used by this module*/
  imports: [
    BrowserModule
  ],
  /** Providers: */
  providers: [],
  /**Bootstrap: */
  bootstrap: [AppComponent]
})
export class AppModule { }
