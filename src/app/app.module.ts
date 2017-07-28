import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { PatientDetailsComponent }  from './hero-detail.component';
import { PatientsComponent }      from './heroes.component';
import { PatientService }          from './hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
