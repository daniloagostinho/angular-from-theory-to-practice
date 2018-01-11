import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emit',
  templateUrl: './emit.component.html',
  styleUrls: ['./emit.component.css']
})

export class EmitComponent implements OnInit {
  // recebe dados do pai
  @Input() arrayPai;

  // criação do evento
  @Output() feedback: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log('recebido do pai', this.arrayPai);
  }

  // função de emissão de evento
  isFeedback(event) {
    // emite o evento
    this.feedback.emit(this.arrayPai);
    this.feedback.emit({nome: 'Carlota', senha: 123});
  }
}

