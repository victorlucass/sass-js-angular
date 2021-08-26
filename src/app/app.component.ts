import { Component, OnInit } from '@angular/core';
import { teste } from './dom/app.dom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sass-js';

  ngOnInit() {
    teste();
  }
}
