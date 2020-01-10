import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { VehiculosService } from '../Services/vehiculos.service';
import { Vehiculos} from '../interfaces/vehiculos';
import * as moment from 'moment';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  private defaultColDef;

  constructor( private _location: Location, private router: Router, private vehiculosService: VehiculosService ) {
    this.defaultColDef = { resizable: true, sortable: true, filter: true };
  }
  vehiculos: Vehiculos[];
  rowData: any;

  // @ts-ignore
  @ViewChild('agGrid') agGrid: AgGridAngular;
  columnDefs = [
    {headerName: 'Nombre', width: 130,  field:  'name' },
    {headerName: 'Diametro', width: 100, field: 'diameter'},
    {headerName: 'Creado', width: 150,  field: 'created', valueFormatter(params) {
      return moment (params.value).format ('DD MMM, YYYY hh:mm'); }
      },
    {headerName: 'Editado', width: 150, field: 'edited',  valueFormatter(params) {
      return moment (params.value).format ('DD MMM, YYYY hh:mm'); }
      },
    {headerName: 'Ubicación', width: 210, field: 'url' }
  ];

  ngOnInit() {
  }

  back(){
    this._location.back();
  }

}
