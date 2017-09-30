import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../home/home.component';
import {BonnetjesComponent} from '../../bonnetjes/bonnetjes.component';
import {OverzichtComponent} from '../../overzicht/overzicht.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Bonnetjes', component: BonnetjesComponent},
  {path: 'Overzicht', component: OverzichtComponent}

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
    BonnetjesComponent,
    OverzichtComponent
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {
}
