import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonasComponent} from './personas/personas.component';
import {MenuComponent} from './menu/menu.component';


const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'personas', component: PersonasComponent },
  { path: '**', pathMatch:'full', redirectTo:'menu'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
