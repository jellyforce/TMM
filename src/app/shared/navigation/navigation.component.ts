import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
})

export class NavigationComponent {
  constructor() {}
  navbar: String[] = [
    'Home',
    'Uitgaven',
    'Inkomsten',
    'Maandlasten',
    'Overzicht',
    'BLA',
    'Lorem']; }
