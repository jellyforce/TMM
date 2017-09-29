import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
})

export class NavigationComponent {
  constructor() {}
  navbar: String[] = [
    'Home',
    'Bonnetjes',
    'Overzicht',
    'BLA',
    'Lorem']; }
