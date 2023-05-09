import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse', 
  pure: true
})
export class ReversePipe implements PipeTransform {

  transform(value: unknown): string {
    console.log('I am now running the pipe');
    if (typeof(value) !== 'string') return `${value}`;

    return value.split('').reverse().join('');
  }

  

}
