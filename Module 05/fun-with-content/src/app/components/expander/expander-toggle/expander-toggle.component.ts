import { AfterContentInit, Component, ContentChild, Optional } from '@angular/core';
import { ExpanderComponent } from '../expander.component';
import { ExpanderToggleDirective } from '../expander-toggle.directive';

@Component({
  selector: '[expander-toggle]',
  templateUrl: './expander-toggle.component.html',
  styleUrls: ['./expander-toggle.component.css']
})
export class ExpanderToggleComponent  {

  constructor(@Optional() public expander: ExpanderComponent | null){}
  

}
