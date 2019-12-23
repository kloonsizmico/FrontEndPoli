import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {


  constructor( private _location: Location ) {
    }

  ngOnInit() {
  }

  back(){
    this._location.back();
  }

}
