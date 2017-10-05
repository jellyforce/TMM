import {Component} from '@angular/core';
/*
import {OnInit} from '@angular/core';
*/
import {AuthService} from './authentication.service';


@Component({
  /***/
  selector: 'app-root',
  /** TemplateUrl: external markup for the page*/
  templateUrl: './app.component.html',
  /** StyleUrls: external styling*/
  styleUrls: ['./app.component.css']
})
/** Export: Making this class available for use somewhere else*/
export class AppComponent {
  /** Attributes: serve as data, these can be used as {{title}} in your html document*/
  title = 'TMM';

  email: string;
  password: string;

  constructor(public authService: AuthService) {}
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }



}
