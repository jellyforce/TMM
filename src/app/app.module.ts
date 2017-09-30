import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule} from './shared/shared.module';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);


@NgModule({
  /** Declarations: make these components usable by other parts of the app*/
  declarations: [
    AppComponent,
  ],
  /** Imports: these modules are used by this module*/
  imports: [
    BrowserModule,
    SharedModule, /*Header/ Footer/ Navigation/ Login*/
    HomeModule,
    rootRouting
  ],
  /** Providers: */
  providers: [],
  /**Bootstrap: */
  bootstrap: [AppComponent]
})
export class AppModule { }
