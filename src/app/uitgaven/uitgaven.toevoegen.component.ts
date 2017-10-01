import {Component} from '@angular/core';

@Component({
  selector: 'app-uitgaven-form',
  templateUrl: './uitgaven.toevoegen.component.html',
  styleUrls: ['./uitgaven.toevoegen.component.css']
})


export class UitgavenToevoegenComponent {
  constructor () {}

  Categories = [
    new Categorie(1, '- Select -'),
    new Categorie(2, 'Eten/Drinken'),
    new Categorie(3, 'Drogisterij'),
    new Categorie(4, 'Kleding/Schoenen'),
    new Categorie(5, 'Sociaal'),
    new Categorie(6, 'Cadeau\'s'),
    new Categorie(7, 'Reizen'),
    new Categorie(8, 'Overig'),
  ];

  private addRowUitgaven() {
    const node = document.createElement('tr');
    const tablerow =
      '           <td>\n' +
      '              <select class="selectbox">\n' +
      '                <option>\n' +
      '                  -Select-\n' +
      '                </option>\n' +
      '                <option>\n' +
      '                  Eten/Drinken\n' +
      '                </option>\n' +
      '                <option>\n' +
      '                  Drogisterij\n' +
      '                </option>\n' +
      '                <option>\n' +
      '                  Kleding/Schoenen\n' +
      '                </option>\n' +
      '                <option>\n' +
      '                  Sociaal\n' +
      '                </option>\n' +
      '                <option>\n' +
      '                  Cadeau\'s\n' +
      '                </option>\n' +      '                <option>\n' +
      '                  Reizen\n' +
      '                </option>\n' +
      '                <option>\n' +
      '                  Overig\n' +
      '                </option>\n' +
      '              </select>\n' +
      '            </td>\n' +
      '            <td>\n' +
      '              <input>\n' +
      '            </td>\n' +
      '            <td>\n' +
      '              <input>\n' +
      '            </td>\n' +
      '            <td>\n' +
      '              <input>\n' +
      '            </td>\n' +
      '            <td>\n' +
      '              <label></label>\n' +
      '            </td>\n' +
      '            <td>\n' +
      '              <select class="selectbox">\n' +
      '                <option *ngFor="let categorie of Categories">\n' +
      '                  {{categorie.name}}\n' +
      '                </option>\n' +
      '              </select>\n' +
      '            </td>';
    node.innerHTML = tablerow;
    /*const node will be added to the parent node:*/
    const parentElement = document.getElementById('uitgaven-table');
    parentElement.appendChild(node);


  }

}

/*used for showing the categories in the select-box*/
export class Categorie {
  constructor (
    public id: number,
    public name: string
  ) {}
}

