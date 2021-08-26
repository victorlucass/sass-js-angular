import { Component, OnInit } from '@angular/core';
import { Main } from './dom/main.dom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sass-js';

  ngOnInit() {
    const dom = new Main();
  }
}
