import { Component } from '@angular/core';
import {ConfigService} from './service/config-service';
import {Observable} from 'rxjs';
import {Joke} from './model/joke-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cohort4';
  data : Observable<Joke>


  constructor(private configService : ConfigService){
    this.data = configService.generateRandomJoke()
  }
}
