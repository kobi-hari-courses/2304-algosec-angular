import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getAllJokes(): Promise<Joke[]> {
    const url = `${BASE_URL}/jokes`;
    return firstValueFrom(this.http.get<Joke[]>(url));
  }

  getJokeById(id: number): Promise<Joke> {
    const url = `${BASE_URL}/jokes/${id}`;
    return firstValueFrom(this.http.get<Joke>(url));
  }

  async getAllJokesResponse(): Promise<Joke[]> {
    const url = `${BASE_URL}/jokes`;
    const p = firstValueFrom(this.http.get<Joke[]>(url, {observe: 'response'}));
    const resp = await p;
    const headers = resp.headers.keys();
    console.log(headers);
    return resp.body!;    
  }
}
