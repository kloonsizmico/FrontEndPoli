import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Personas} from '../interfaces/personas';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {ManejoErroresService} from '../manejoErrores/manejo-errores.service';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  public urlApi = 'https://swapi.co/api/peoplea/';

  constructor(private httpClient: HttpClient) {}

  getAllPersonas(): Observable<Personas[]> {
    return this.httpClient.get<Personas[]>(`${this.urlApi}`);
  }
}


