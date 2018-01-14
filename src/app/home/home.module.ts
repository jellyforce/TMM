/*Angular Components*/
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*Self made Modules*/


/*Self made Components*/
import { HomeComponent } from './home.component';


/*
const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);
*/

@NgModule({
  imports: [
   /* homeRouting*/
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
