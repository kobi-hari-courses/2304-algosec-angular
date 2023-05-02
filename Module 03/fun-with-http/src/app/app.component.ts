import { Component } from '@angular/core';
import { Joke } from './models/joke.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';
  jokes: Joke[] = [];

  id = 5;

  constructor(private data: DataService){}

  async inc() {
    this.id++;
    await this.getCurrentJoke();
  }

  async dec() {
    this.id--;
    await this.getCurrentJoke();
  }

  async getCurrentJoke() {
    try {
      const p = this.data.getJokeById(this.id);
      this.message = 'Please wait';
      this.jokes = [await p];
      this.message = `Successfully fetched ${this.jokes.length} jokes`;  
    }
    catch (err) {
      this.message = `Error while fetching joke ${JSON.stringify(err)}`;
    }

  }

  async getAllJokes() {
    const p = this.data.getAllJokesResponse();
    this.message = 'Please wait';
    this.jokes = await p;
    this.message = `Successfully fetched ${this.jokes.length} jokes`;
  }

}
