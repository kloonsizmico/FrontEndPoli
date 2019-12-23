import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  constructor( private _location: Location ) { }

  ngOnInit() {
  }

  back(){
    this._location.back();
  }

}
