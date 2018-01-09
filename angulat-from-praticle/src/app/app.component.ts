import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jokesObj: Object[] = [
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

  hide = true;

  constructor() {}

  ngOnInit() {
    console.log('objeto do pai:', this.jokesObj);
  }

  toggle(joke) {
    this.hide = !this.hide;
  }

  // função para receber emit Output do Filho
  reciverFeedback(feed, index) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', feed);
    // feed.forEach(function (item, indice, array) {
    //   console.log(item, indice);
  }

}
