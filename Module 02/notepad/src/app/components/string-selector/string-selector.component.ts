import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent implements OnInit, OnChanges {
  @Input()
  options: string[] = [];

  @Input()
  selectedOption: string = '';

  indexOfSelected = -100;

  constructor() {
  }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.indexOfSelected = this.options.indexOf(this.selectedOption);
  }


  @Output()
  selection = new EventEmitter<string>();

  onClickOnOption(value: string) {
    this.selection.emit(value);
  }

}
