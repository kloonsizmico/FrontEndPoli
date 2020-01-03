import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Personas} from '../interfaces/personas';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private httpClient: HttpClient ) { }

  getAllPersonas(): Observable<Personas[]>  {
    return this.httpClient.get<Personas[]>('https://swapi.co/api/people/');
  }
}
