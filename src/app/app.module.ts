import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';


/*Self-made Modules*/
import { HomeModule } from './home/home.module';
import { SharedModule} from './shared/shared.module';

/*Firebase*/

import {environment} from '../environments/environment';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';


import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {AuthService} from './authentication.service';



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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  /** Providers: */
  providers: [AuthService],
  /**Bootstrap: */
  bootstrap: [AppComponent]
})
export class AppModule {

}


