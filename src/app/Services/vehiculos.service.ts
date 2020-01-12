import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vehiculos } from '../interfaces/vehiculos';
// import { enviroment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor( private httpClient: HttpClient) { }

  getAllVehiculos(): Observable<Vehiculos[]> {
    return this.httpClient.get<Vehiculos[]>( 'https://swapi.co/api/vehicles/' );
  }
}
