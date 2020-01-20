import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavesService } from '../Services/naves.service';
import { Naves } from '../interfaces/naves';
import * as moment from 'moment';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {
  public get location(): Location {
    return this._location;
  }
  public set location(value: Location) {
    this._location = value;
  }

  public defaultColDef;

  constructor( private _location: Location, private router: Router, private navesService: NavesService ) {
    this.defaultColDef = { resizable: true, sortable: true, filter: true };
  }

  naves: Naves[];
  rowData: any;

  // @ts-ignore
  @ViewChild('agGrid') agGrid: AgGridAngular;
  columnDefs = [
    {headerName: 'Nombre', width: 190,  field:  'name' },
    {headerName: 'Modelo', width: 220, field: 'model'},
    {headerName: 'Clase de nave', width: 190, field: 'starship_class'},
    {headerName: 'Fabricante', width: 360,  field: 'manufacturer'},
    {headerName: 'Costo en creditos', width: 140,  field: 'cost_in_credits'},
    {headerName: 'Longitud', width: 90,  field: 'length'},
    {headerName: 'Personal', width: 90,  field: 'crew'},
    {headerName: 'Pasajeros', width: 100,  field: 'passengers'},
    {headerName: 'Velocidad maxima de atmosfera', width: 220,  field: 'max_atmosphering_speed'},
    {headerName: 'Calificacon hiperimpulsor', width: 190,  field: 'hyperdrive_rating'},
    {headerName: 'Capacidad de carga', width: 150,  field: 'cargo_capacity'},
    {headerName: 'Consumibles', width: 110,  field: 'consumables'},
    {headerName: 'Peliculas', width: 650,  field: 'films'},
    {headerName: 'Pilotos', width: 720,  field: 'pilots'},
    {headerName: 'Ubicación', width: 210, field: 'url' },
    {headerName: 'Creado', width: 150,  field: 'created', valueFormatter(params) {
      return moment (params.value).format ('DD MMM, YYYY hh:mm'); }
      },
    {headerName: 'Editado', width: 150, field: 'edited',  valueFormatter(params) {
      return moment (params.value).format ('DD MMM, YYYY hh:mm'); }
      },
  ];

  ngOnInit() {
    this.getAllNaves();
  }

  getAllNaves() {
    this.navesService.getAllNaves().subscribe(resp => {
      this.rowData = resp;
    });
  }

  back() {
    this._location.back();
  }

}

