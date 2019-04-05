import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {
    http.get('https://api.chucknorris.io/jokes/random')
      .subscribe(data=>console.log(data))
  }


}
