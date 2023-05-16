import { parseHostBindings } from '@angular/compiler';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img'
})
export class ImgDirective {

  @HostBinding('attr.title')
  @Input('src')
  src: string = '';


  constructor() { }

}
