import {Component} from '@angular/core';



@Component({
  /***/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/** Export: Making this class available for use somewhere else*/
export class AppComponent {
  /** Attributes: serve as data, these can be used as {{title}} in your html document*/
  title = 'TMM';

  constructor() {

  }

}
