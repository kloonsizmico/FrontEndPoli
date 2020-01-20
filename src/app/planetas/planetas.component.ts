import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PlanetasService } from '../Services/planetas.service';
import { Planetas } from '../interfaces/planetas';
import * as moment from 'moment';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  public defaultColDef;

  constructor( private _location: Location, private router: Router, private planetasService: PlanetasService ) {
    this.defaultColDef = { resizable: true, sortable: true, filter: true };
  }

  planetas: Planetas[];
  rowData: any;

  // @ts-ignore
  @ViewChild('agGrid') agGrid: AgGridAngular;
  columnDefs = [
    {headerName: 'Nombre', width: 130,  field:  'name' },
    {headerName: 'Diametro', width: 100, field: 'diameter'},
    {headerName: 'Periodo de rotacion', width: 130,  field:  'rotation_period' },
    {headerName: 'Gravedad', width: 130,  field:  'gravity' },
    {headerName: 'Poblacion', width: 130,  field:  'population' },
    {headerName: 'Clima', width: 130,  field:  'climate' },
    {headerName: 'Terreno', width: 130,  field:  'terrain' },
    {headerName: 'Superficie del agua', width: 130,  field:  'surface_water' },
    {headerName: 'Residentes', width: 130,  field:  'residents' },
    {headerName: 'Peliculas', width: 490,  field: 'films'},
    {headerName: 'Ubicación', width: 210, field: 'url' },
    {headerName: 'Creado', width: 150,  field: 'created', valueFormatter(params) {
      return moment (params.value).format ('DD MMM, YYYY hh:mm'); }
      },
    {headerName: 'Editado', width: 150, field: 'edited',  valueFormatter(params) {
      return moment (params.value).format ('DD MMM, YYYY hh:mm'); }
      },
    ];

  ngOnInit() {
    this.getAllPlanetas();
  }

  getAllPlanetas() {
    this.planetasService.getAllPlanetas().subscribe(resp => {
      this.rowData = resp;
    });
  }

  back() {
    this._location.back();
  }

}
