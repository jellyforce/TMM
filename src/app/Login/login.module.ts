import {NgModule} from '@angular/core';
import {AuthService} from '../authentication.service';
import {LoginComponent} from './login.component';


@NgModule({
  imports: [
  ],
  declarations: [
    AuthService,
    LoginComponent
  ]
})

export class LoginModule {}
