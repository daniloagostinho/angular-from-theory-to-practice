import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit {

  @Input() arrayPai;
  @Output() feedback: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log('recebido do pai', this.arrayPai);
    console.log('dados');
  }

  isFeedback() {
    this.feedback.emit({nome: 'Bixão', idade: 30});
  }

}
