import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword: string = '';
  results: string[] = [];
  isBusy: boolean = false;

  setKeyword(value: string) {
    console.log('changing keyword to', value);
    this.keyword = value;
  }

  search() {
    console.log('started searching');
    this.results = [];
    this.isBusy = true;

    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        this.keyword.toLowerCase(), 
        this.keyword.toUpperCase(), 
        `** ${this.keyword} **`
      ]
      console.log('Completed Searching');
    }, 3000);

  }


  constructor() {
  }


}
