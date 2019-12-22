import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { EspeciesComponent } from './especies/especies.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    MenuComponent,
    PlanetasComponent,
    PeliculasComponent,
    EspeciesComponent,
    VehiculosComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
