import { Directive, HostListener, Optional } from '@angular/core';
import { ExpanderComponent } from './expander.component';

@Directive({
  selector: '[expander-toggle]'
})
export class ExpanderToggleDirective {

  @HostListener('click')
  onClick() {
    this.expander?.toggle();
  }

  constructor(@Optional() private expander: ExpanderComponent | null) { 
  }

}
