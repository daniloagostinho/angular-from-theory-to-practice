import { JokeListComponent } from './joke-list/joke-list.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(ChildComponent) childChild: ChildComponent;
  @ViewChild(JokeListComponent) jlist: JokeListComponent;

  // ler variaveis de ambiente
  @ViewChild('local') local: ElementRef;


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
    this.adicionaText();
    // tslint:disable-next-line:no-unused-expression
    console.log(this.childChild.nome);
    console.log(this.childChild.sobreNome = 'Emerson');

    console.log(this.local.nativeElement.style.backgroundColor = 'red');
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

  adicionaText() {
    this.childChild.addText('dsds');
  }
}
