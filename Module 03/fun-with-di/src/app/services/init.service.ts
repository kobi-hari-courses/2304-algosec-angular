import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  someSade = -1;

  async init() {
    console.log('initialization started');
    await new Promise(res => setTimeout(res, 5000));
    this.someSade = 42;
    console.log('initialization completed');
  }

  constructor() { }
}
