import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  presentDiv = false;
  promiseResolver: ((res: number) => void) | null = null;

  createPromise(): Promise<number> {
    return new Promise(res => setTimeout(() => res(42), 3000));
  }

  createCustumPromise<T>(delay: number, result: T): Promise<T> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result)
      } , delay);
    });
  }

  resolvePromise(result: number) {
    this.promiseResolver!(result);
    this.presentDiv = false;
    this.promiseResolver = null;
  }

  createUserPromise(): Promise<number> {
    this.presentDiv = true;
    return new Promise<number>((resolve, reject) => {
      this.promiseResolver = resolve;
    });


  }



  // go() {    
  //   const p = this.createProise();
  //   console.log('starting the promise');
  //   let p2 = p.then(res => {
  //     console.log('Promise is completed with result', res);
  //     return 'Hello World';
  //   });

  //   console.log('go function completed');
  // }

  // go() {
  //   console.log('A');
  //   this.start();
  //   console.log('B');
  // }

  async go() {
    // const promises = [1000, 3000, 2000, 4000]
    //   .map((num, index) => this.createCustumPromise(num, index * 10));

    const promises = [
      this.createCustumPromise(1000, 42), 
      this.createCustumPromise(2000, 'hello'), 
      this.createCustumPromise(3000, true)
    ] as const;


    const p_all = Promise.race(promises);
    const res_all = await p_all;

    Promise.resolve(42);

    console.log(res_all);

  }

  async start() {
    try {
      console.log('starting promise')
      console.log(1);
      const p = this.createUserPromise();    
      console.log(2);
      const res = await p;
      console.log(3);  
      console.log('promise completed with result', res);

    } catch {

    }

    return 'Hello';
  }

}
