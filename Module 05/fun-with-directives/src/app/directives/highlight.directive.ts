import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit, OnChanges {

  @Input('highlight')
  color: string | undefined = 'magenta';

  @Output('vanished')
  vanished = new EventEmitter<string>();

  counter = 0;

  @HostBinding('style.background')
  bg: string = '';

  @HostBinding('class.hl')
  hl = true;

  @HostBinding('attr.title')
  tooltip = 'It works!!!!'

  @HostListener('click')
  whenClicked() {
    this.counter++;
    if (this.counter === 2) {
      this.invalidate();
      this.vanished.emit(this.color);
    }
  }

  invalidate() {
    if (this.counter >= 2) {
      this.bg = '';
      return;
    }

    if (!this.color) {
      this.bg = 'lime';
      return;
    }

    this.bg = this.color;
  }


  constructor(
    private elem: ElementRef<any>, 
    private renderer: Renderer2) {
    // VERY VERY BAD
    // elem.nativeElement.style.background = 'yellow';

    // BAD
    // this.renderer.setStyle(this.elem.nativeElement, 'background', 'pink');
  }
  ngOnInit(): void {
    this.invalidate();
  }

  ngOnChanges(): void {
    this.invalidate();
  }

}
