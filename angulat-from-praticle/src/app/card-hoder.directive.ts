import { CardComponent } from './card/card.component';
import { Directive, ElementRef, Renderer, HostListener, HostBinding  } from '@angular/core';

@Directive({
  selector: '[appCardHoder]'
})
export class CardHoderDirective {
  isActive: boolean;
  // toda vez que sair um evento HostListener atualize o valor da variavel ishovering
  // @HostBinding('style.border') border: string;

  @HostListener('click') onclick() {
    const card = this.elementRef.nativeElement.querySelector('.card-text');
    this.background = 'red';
  }

  @HostListener('mouseenter') onmouseenter() {
    const card = this.elementRef.nativeElement.querySelector('.card-text');
    this.background = 'green';
  }


  @HostListener('mouseleave') onMouseEnter() {
    const card = this.elementRef.nativeElement.querySelector('.card-text');
    this.background = 'blue';
  }

  // tslint:disable-next-line:member-ordering
  @HostBinding('style.backgroundColor') background: string;

  // @HostListener('click') onHover() {
  //   console.log('cliquei!!');

  //   const card = this.elementRef.nativeElement.querySelector('.card-text');
  //   const section = this.elementRef.nativeElement.querySelector('.card-section');

  //   this.renderer.setElementStyle(card, 'backgroundColor', 'green');
  //   this.renderer.setElementStyle(section, 'backgroundColor', 'orange');
  // }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer) {
    // elementRef.nativeElement.style = 'color: red';
    console.log('valor da variavel ishovering:');

    renderer.setElementStyle(elementRef.nativeElement, 'backgroundColor', 'purple');

    console.log('depois de ser setado com render', elementRef.nativeElement.style.backgroundColor);
  }

}
