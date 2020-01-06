import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Especies } from '../interfaces/especies';
// import { enviroment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  constructor( private httpClient: HttpClient) { }

  getAllPeliculas(): Observable<Especies[]> {
    return this.httpClient.get<Especies[]>( 'https://swapi.co/api/species/' );
  }
}
