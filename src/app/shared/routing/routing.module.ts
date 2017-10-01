import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../home/home.component';
import {UitgavenComponent} from '../../uitgaven/uitgaven.component';
/*
import {OverzichtComponent} from '../../overzicht/overzicht.component';
*/
import {UitgavenToevoegenComponent} from '../../uitgaven/uitgaven.toevoegen.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Uitgaven', component: UitgavenComponent},
  {path: 'Uitgaven/Toevoegen', component: UitgavenToevoegenComponent}
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
    /*OverzichtComponent*/
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {
}
