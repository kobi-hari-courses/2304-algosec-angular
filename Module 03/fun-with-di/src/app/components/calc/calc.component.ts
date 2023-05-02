import { Component, Injector } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';

class A {
  i = 5;
}


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'], 
  providers: []
})
export class CalcComponent {

  constructor(
    public additionService: AdditionService, 
    public wrongAdditionService: WrongAdditionService){

  }

  result: number = -1;

  add(a: number, b: number) {
    this.result = this.additionService.add(a, b);
  }

}
