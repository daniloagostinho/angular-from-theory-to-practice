import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit {

  // recebe dados do pai
  @Input() arrayPai;

  // criação do evento
  @Output() feedback: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log('recebido do pai', this.arrayPai);
    console.log('dados');
  }

  // função de emissão de evento
  isFeedback() {
    // emite o evento
    this.feedback.emit({nome: 'Bixão', idade: 30});
  }

}
