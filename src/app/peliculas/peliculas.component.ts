import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PeliculasService } from '../Services/peliculas.service';
import { Peliculas } from '../interfaces/peliculas';
import * as moment from 'moment';
// import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public defaultColDef;

  // tslint:disable-next-line:variable-name
  constructor( private _location: Location, private router: Router, private peliculasService: PeliculasService ) {
    this.defaultColDef = { resizable: true };
  }

  peliculas: Peliculas[];
  rowData: any;
  // @ts-ignore
  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefs = [
    {headerName: 'Título', field:  'title', sortable: true , filter: true},
    {headerName: 'Espisodio nº:', width: 140 , field: 'episode_id', sort:'asc', sortable: true, filter: true},
    {headerName: 'Director', width: 150 , field: 'director', sortable: true, filter: true, },
    {headerName: 'Año de lanzamiento', width: 170 , field: 'release_date', sortable: true, filter: true, },
    {headerName: 'Realizada', width: 170 , field: 'created', sortable: true, filter: true, valueFormatter( params ) {
      return moment( params.value ).format( 'DD MMM, YYYY hh:mm' );
    }},
    {headerName: 'Editada', width: 170 , field: 'edited', sortable: true, filter: true, valueFormatter( params ) {
      return moment( params.value ).format( 'DD MMM, YYYY hh:mm' );
    }},
    {headerName: 'Ubicación', width: 200 , field: 'url', sortable: true, filter: true, }

  // {headerName: 'starships', field: 'starships', sortable: true, filter: true },
  ];


  ngOnInit() {
    this.getAllPeliculas();
  }

  getAllPeliculas() {
    this.peliculasService.getAllPeliculas().subscribe(resp => {
      this.rowData = resp;
    });
  }

  back(){
    this._location.back();
  }

}
