import {Component} from '@angular/core';

import * as $ from 'jquery';

/*

declare var $: any ;
*/

@Component({
  selector: 'app-uitgaven-form',
  templateUrl: './uitgaven.toevoegen.component.html',
  styleUrls: ['./uitgaven.toevoegen.component.css']
})


export class UitgavenToevoegenComponent {
  constructor () {
    /*adding removefunction for dynamic inserted elements of the table*/
  $(document).ready(function(){
    $('#uitgaven-table').on('click', '#delete-btn', function(){
      /*parentnode = <td>, of parentnode = <tr>, of parentnode = <table>, removechild = <tr> (element)>*/
      this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentElement);
    });
  });

  }

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
    /*node is the new row element that will be inserted into the table when button clicked*/
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
      '                </option>\n' +
      '                <option>\n' +
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
      '                </option>\n' +
      '                <option>\n' +
      '                  Reizen\n' +
      '                </option>\n' +
      '                <option>\n' +
      '                  Overig\n' +
      '                </option>\n' +
      '              </select>\n' +
      '            </td>' +
      '            <td class="delete-btn-td">' +
      '             <input type="button" value="X" class="delete-btn" id="delete-btn">' +
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

