import { CardComponent } from './card/card.component';
import { Directive, ElementRef, Renderer, HostListener, HostBinding  } from '@angular/core';

@Directive({
  selector: '[appCardHoder]'
})
export class CardHoderDirective {
  // toda vez que sair um evento HostListener atualize o valor da variavel ishovering
  @HostBinding('class.card-outline-primary') private ishovering: boolean;
  @HostListener('click') onHover() {
    console.log('cliquei!!');

    const card = this.elementRef.nativeElement.querySelector('.card-text');
    const section = this.elementRef.nativeElement.querySelector('.card-section');

    this.renderer.setElementStyle(card, 'backgroundColor', 'green');
    this.renderer.setElementStyle(section, 'backgroundColor', 'orange');

    this.ishovering = true;
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer) {
    // elementRef.nativeElement.style = 'color: red';
    console.log(this.ishovering);

    renderer.setElementStyle(elementRef.nativeElement, 'backgroundColor', 'purple');

    console.log('depois de ser setado com render', elementRef.nativeElement.style.backgroundColor);
  }

}
