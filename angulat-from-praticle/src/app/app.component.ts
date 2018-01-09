import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jokesObj: Object[];
  hide = true;

  constructor() {
    this.jokesObj = [
      {
        nome: 'Danilo',
        sobreNome: 'Silva!'
      },
      {
        nome: 'Emerson',
        sobreNome: 'Leite'
      },
      {
        nome: 'Guide',
        sobreNome: 'Investimentos!'
      }
    ];
  }
  ngOnInit() {
    console.log('objeto do pai:', this.jokesObj);
  }

  toggle(joke) {
    this.hide = !this.hide;
  }

  reciverFeedback(feed) {
    console.log('foi emitido o evento e chegou no pai>>>> ', feed);
  }

}
