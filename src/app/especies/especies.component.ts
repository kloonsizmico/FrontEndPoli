import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { EspeciesService } from '../Services/especies.service';
import { Especies } from '../interfaces/especies';
import * as moment from 'moment';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  public defaultColDef;

  constructor( private _location: Location, private router: Router, private especiesService: EspeciesService ) {
    this.defaultColDef = { resizable: true, sortable: true, filter: true };
  }

  especies: Especies[];
  rowData: any;

  // @ts-ignore
  @ViewChild('agGrid') agGrid: AgGridAngular;
  columnDefs = [
    {headerName: 'Nombre', width: 130,  field:  'name' },
    {headerName: 'Especie', width: 100, field: 'classification'},
    {headerName: 'Altura promedio', width: 140 , field: 'average_height' },
    {headerName: 'Colores de cabello', width: 150 , field: 'hair_colors' },
    {headerName: 'Colores de piel', width: 180 , field: 'skin_colors' },
    {headerName: 'Colores de ojos', width: 160 , field: 'eye_colors' },
    {headerName: 'Esperanza de vida', width: 150 , field: 'average_lifespan' },
    {headerName: 'Idioma', width: 130, field: 'language' },
    {headerName: 'Planeta', width: 210 , field: 'homeworld' },
    {headerName: 'Creado', width: 150,  field: 'created', valueFormatter(params) {
      return moment (params.value).format ('DD MMM, YYYY hh:mm'); }
      },
    {headerName: 'Editado', width: 150, field: 'edited',  valueFormatter(params) {
      return moment (params.value).format ('DD MMM, YYYY hh:mm'); }
      },
    {headerName: 'Ubicación', width: 210, field: 'url' }
  ];

  ngOnInit() {
    this.getAllEspecies();
  }

  getAllEspecies() {
    this.especiesService.getAllPeliculas().subscribe(resp => {
      this.rowData = resp;
    });
  }

  back(){
    this._location.back();
  }

}
