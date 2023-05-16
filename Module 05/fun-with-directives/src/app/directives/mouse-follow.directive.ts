import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mouse-follow]', 
  exportAs: 'mouse'
})
export class MouseFollowDirective {
  x: number = 0;
  y: number = 0;

  get xAsString() {
    return `${this.x}px`
  }

  get yAsString() {
    return `${this.y}px`;
  }

  @HostListener('mousemove', ['$event'])
  whenMouseMoved(ev: MouseEvent) {
    this.x = ev.offsetX;
    this.y = ev.offsetY;
  }


  constructor() { }

}
