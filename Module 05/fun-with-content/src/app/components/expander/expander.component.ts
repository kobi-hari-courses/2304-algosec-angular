import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { ExpanderToggleDirective } from './expander-toggle.directive';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements AfterContentInit {

  @ContentChild(ExpanderToggleDirective)
  private toggleDirective: ExpanderToggleDirective | null = null;

  customToggleExists = false;


  ngAfterContentInit(): void {
    console.log('looking for the toggle directive', this.toggleDirective);
    this.customToggleExists = Boolean(this.toggleDirective);
    console.log('Custom Toggle Exists', this.customToggleExists);
  }

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
