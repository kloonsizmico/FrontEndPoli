import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Planetas } from '../interfaces/planetas';
// import { enviroment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor( private httpClient: HttpClient) { }

  getAllPlanetas(): Observable<Planetas[]> {
    return this.httpClient.get<Planetas[]>( 'https://swapi.co/api/planets/' );
  }
}
