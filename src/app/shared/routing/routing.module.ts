import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../home/home.component';
import {UitgavenComponent} from '../../uitgaven/uitgaven.component';


import {UitgavenToevoegenComponent} from '../../uitgaven/uitgaven.toevoegen.component';
import {InkomstenComponent} from '../../inkomsten/inkomsten.component';
import {InkomstenToevoegenComponent} from '../../inkomsten/inkomsten.add.component';
/* import {OverzichtComponent} from '../../overzicht/overzicht.component'; */

const appRoutes: Routes = [
  {path: '', component: HomeComponent},  /*starting screen*/
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
    InkomstenToevoegenComponent
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
