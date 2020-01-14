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

