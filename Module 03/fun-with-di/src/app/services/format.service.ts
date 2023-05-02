import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }

  format(date: Date): string {
    return `** ${date.toTimeString()} **`;
  }
}
