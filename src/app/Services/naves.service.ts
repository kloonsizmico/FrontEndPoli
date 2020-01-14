import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Naves } from '../interfaces/naves';
// import { enviroment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  constructor( private httpClient: HttpClient) { }

  getAllNaves(): Observable<Naves[]> {
    return this.httpClient.get<Naves[]>( 'https://swapi.co/api/starships/' );
  }
}
