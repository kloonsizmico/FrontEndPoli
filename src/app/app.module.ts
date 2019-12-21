import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { PlanetasComponent } from './planetas/planetas.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    MenuComponent,
    PlanetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
