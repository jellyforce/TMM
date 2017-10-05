import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../home/home.component';
import {UitgavenComponent} from '../../uitgaven/uitgaven.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

/*
import {OverzichtComponent} from '../../overzicht/overzicht.component';
*/
import {UitgavenToevoegenComponent} from '../../uitgaven/uitgaven.toevoegen.component';
import {InkomstenComponent} from '../../inkomsten/inkomsten.component';
import {InkomstenToevoegenComponent} from '../../inkomsten/inkomsten.add.component';


import {LoginComponent} from '../../Login/login.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Uitgaven', component: UitgavenComponent},
  {path: 'Uitgaven/Toevoegen', component: UitgavenToevoegenComponent},
  {path: 'Inkomsten', component: InkomstenComponent},
  {path: 'Inkomsten/Toevoegen', component: InkomstenToevoegenComponent}
/*
  {path: 'Overzicht', component: OverzichtComponent}
*/

];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    UitgavenComponent,
    UitgavenToevoegenComponent,
    InkomstenComponent,
    InkomstenToevoegenComponent,
    LoginComponent
    /*OverzichtComponent*/
  ],
  exports: [
    RouterModule
  ],
  /** Providers: */
  providers: [],
})

export class RoutingModule {
}
