import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonasComponent} from './personas/personas.component';
import {MenuComponent} from './menu/menu.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { EspeciesComponent } from './especies/especies.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';


const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'personas', component: PersonasComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'especies', component: EspeciesComponent },
  { path: 'planetas', component: PlanetasComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: '**', pathMatch:'full', redirectTo:'menu'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
