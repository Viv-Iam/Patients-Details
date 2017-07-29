import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { PatientDetailComponent }  from './patient-detail.component';
import { PatientsComponent }      from './patients.component';
import { PatientService }          from './patient.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
     InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    PatientDetailComponent,
    PatientsComponent
  ],
  providers: [ PatientService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
