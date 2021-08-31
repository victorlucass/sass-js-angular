import { Component, OnInit } from '@angular/core';
import { script } from './custom/script';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Animais Fantásticos';
  ngOnInit() {
    script();
  }
}
