import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: string[] = ['red', 'green', 'blue', 'brown', 'purple', 'black', 'teal'];
  sizes: string[] = ['12px', '18px', '24px', '35px', '60px'];
  fonts: string[] = ['David', 'Times new Roman', 'Arial', 'Verdana', 'Consolas', 'Miriam', 'Segoe UI'];

  selectedColor: string = this.colors[0];
  selectedSize: string = this.sizes[0];
  selectedFont: string = this.fonts[0];

  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

}
