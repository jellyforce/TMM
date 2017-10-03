import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


import {InkomstenComponent} from './inkomsten.component';
import {InkomstenToevoegenComponent} from './inkomsten.add.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    InkomstenComponent,
    InkomstenToevoegenComponent
  ],

})

export class InkomstenModule { }
