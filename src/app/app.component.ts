import { Component, OnInit } from '@angular/core';
import { Main } from './dom/navegacaoTab.dom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Animais Fantásticos';

  ngOnInit() {
    const dom = new Main();
  }
}
