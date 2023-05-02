import { Injectable } from '@angular/core';
import { HistoryService } from './history.service';
import { Adder } from './adder.interface';

@Injectable({
  providedIn: 'root'
})
export class WrongAdditionService implements Adder {
  id: number;

  constructor(private history: HistoryService) {
      this.id = Math.ceil(Math.random() * 100000);
      console.log('Wrong Addition service is created with id ', this.id);
  }

  add(a: number, b: number): number {
      this.history.audit(`Wrong Addition of ${a} and ${b}`);
      return a + b + 1;
  }
}
