import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './inkomsten.add.component.html',
  encapsulation: ViewEncapsulation.None

})


export class InkomstenToevoegenComponent {
  constructor() {}

  Categorien = [
    new Categorie(1, '-Select-', 'Maak een keuze'),
    new Categorie(2, 'Loon', 'Hier kunt u uw maandelijkse loon bijhouden'),
    new Categorie(3, 'Instanties', 'Denk hierbij aan belastingteruggave, huursubsidie, zorgverzekering en andere "inkomsen"'),
    new Categorie(4, 'Anders', 'Alles wat niet onder de andere categoriën is te plaatsen')
  ];
}


/*used for showing the categories in the select-box*/
export class Categorie {
  constructor (
    public id: number,
    public name: string,
    public omschrijving: string
  ) {}
}
