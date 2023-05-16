import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent {
  @Input()
  highlight: string = 'green';

  pi = 3.14;

}
