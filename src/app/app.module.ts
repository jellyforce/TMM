/*Angular Modules*/
import {BrowserModule } from '@angular/platform-browser';     // to start a browser application
import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

/*Angular Components*/
import { AppComponent } from './app.component';

/*Self-made Modules*/
import { HomeModule } from './home/home.module';
import { SharedModule} from './shared/shared.module';






const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);


@NgModule({
  /** Declarations: make these components usable by other parts of the app*/
  declarations: [
    AppComponent
  ],
  /** Imports: these modules are used by this module*/
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule, /*Header/ Footer/ Navigation/ Login*/
    HomeModule,
    rootRouting,

  ],
  /** Providers: */
  providers: [],
  /**Bootstrap: */
  bootstrap: [AppComponent]
})
export class AppModule {

}


