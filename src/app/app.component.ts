import { Component } from '@angular/core';

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



}
