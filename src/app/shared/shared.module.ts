/* Angular Modules*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';




/* Self-made components*/
import { HeaderComponent} from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { NavigationComponent} from './navigation';
import { RoutingModule} from './routing/routing.module';


@NgModule({
  /** Imports: these modules are used by this module*/
  imports: [
    CommonModule,
    RouterModule,
    RoutingModule
  ],
  /*Declarations: these components are use by this Module*/
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    RoutingModule,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ]
})
export class SharedModule {}
