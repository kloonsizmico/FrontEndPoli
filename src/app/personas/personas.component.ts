import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {PersonasService} from '../Services/personas.service';
import {Personas} from '../interfaces/personas';
import {HttpClient} from '@angular/common/http';
import {AgGridAngular} from 'ag-grid-angular';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private _location: Location, private router: Router, private personasService: PersonasService, private http: HttpClient) {
  }
  personas: Personas[];
  rowData: any;
  // @ts-ignore
  @ViewChild('agGrid') agGrid: AgGridAngular;
  columnDefs = [
    {headerName: 'Nombre', field:  'name', sortable: true , filter: true},
    {headerName: 'Periodo rotación', field: 'rotation_period', sortable: true, filter: true},
    {headerName: 'Periodo orbital', field: 'orbital_period', sortable: true, filter: true, },
    {headerName: 'Diametro', field: 'diameter', sortable: true, filter: true, },
     {headerName: 'Clima', field: 'climate', sortable: true, filter: true, },
    {headerName: 'Gravedad', field: 'gravity', sortable: true, filter: true },
    {headerName: 'Terreno', field: 'terrain', sortable: true, filter: true },
    {headerName: 'Superficie del agua', field: 'surface_water', sortable: true, filter: true },
    {headerName: 'Población', field: 'population', sortable: true, filter: true },
    {headerName: 'Creado', field: 'created', sortable: true, filter: true },
    {headerName: 'Editado', field: 'edited', sortable: true, filter: true },
    {headerName: 'Ubicación', field: 'url', sortable: true, filter: true },
  ];
  ngOnInit() {
    this.getAllPersonas();
  }
  getAllPersonas() {
    this.personasService.getAllPersonas().subscribe(resp => {
     // this.personas = resp;
      this.rowData = resp;
    });
  }
  back() {
    this._location.back();
  }
}


