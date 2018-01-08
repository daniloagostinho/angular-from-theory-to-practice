import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit {

  jokes: Object[];

  constructor() {
    this.jokes = [
      {
        setup: 'Alguma coisa aqui...',
        publishin: 'concluido!'
      },
      {
        setup: 'Alguma coisa aqui...',
        publishin: 'concluido!',
      },
      {
        setup: 'Alguma coisa aqui...',
        publishin: 'concluido!',
      }
    ];
  }
  ngOnInit() {
    console.log(this.jokes);
  }
}
