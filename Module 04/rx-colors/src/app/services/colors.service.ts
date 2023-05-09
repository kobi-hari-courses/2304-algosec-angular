import { Injectable } from '@angular/core';
import { Color } from '../models/color.model';
import { ALL_COLORS } from '../data/color-names';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private delay(millis: number): Promise<void> {
    return new Promise(res => setTimeout(res, millis));
  }

  async search(keyword: string): Promise<Color[]> {
    keyword = keyword.toLowerCase();

    if (!keyword) return [];

    console.log('Starting search for ', keyword);

    await this.delay(3000);
    
    const results = ALL_COLORS
      .filter(c => c.name.toLocaleLowerCase().includes(keyword))

    console.log('Completed search for', keyword);
    return results;

  }

  constructor() { }
}
