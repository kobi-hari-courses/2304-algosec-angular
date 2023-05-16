import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnDestroy {
  constructor() {
    console.log('Hey guys, I was just created')
  }
  ngOnDestroy(): void {
    console.log('Oh Gee I was just destroyed');
  }

}
