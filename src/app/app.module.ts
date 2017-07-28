import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { PatientDetailComponent }  from './patient-detail.component';
import { PatientsComponent }      from './patients.component';
import { PatientService }          from './patient.service';

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
    PatientDetailComponent,
    PatientsComponent
  ],
  providers: [ PatientService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
