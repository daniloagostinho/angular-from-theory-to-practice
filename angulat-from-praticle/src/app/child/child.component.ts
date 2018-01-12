import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  nome = 'nome';
  sobreNome;

  constructor() { }

  ngOnInit() {
    this.addText('jsnajdnsjdjsnajndjsanjdnsj');
  }

  // func do filho para ser usado pelo Pai.
  addText(text: string) {
    console.log(text);
  }

}
