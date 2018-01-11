import { CardComponent } from './card/card.component';
import { element } from 'protractor';
import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHoder]'
})
export class CardHoderDirective {

  @HostListener('click') onHover() {
    console.log('cliquei!!');

    const card = this.elementRef.nativeElement.querySelector('.card-text');

    this.renderer.setElementStyle(card, 'backgroundColor', 'green');
  }


  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer) {
    console.log(elementRef);
    // elementRef.nativeElement.style = 'color: red';

    console.log(renderer);

    renderer.setElementStyle(elementRef.nativeElement, 'backgroundColor', 'purple');

    console.log('depois de ser setado com render', elementRef.nativeElement.style.backgroundColor);
  }


}
