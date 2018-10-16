import { Component } from '@angular/core';

@Component({
  selector: 'recipe-box',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-box';
  date = new Date();
}
