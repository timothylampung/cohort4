import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Joke} from '../model/joke-model';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {
  }

  generateRandomJoke() : Observable<Joke>{
   return this.http
     .get<Joke>('https://api.chucknorris.io/jokes/random')
  }

}
