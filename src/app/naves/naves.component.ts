import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
      }
    
    back(){
      this._location.back();
    }
   
}
