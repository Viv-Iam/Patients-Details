import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientsComponent }      from './patients.component';
import { PatientDetailComponent }  from './patient-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  { path: 'patients',     component: PatientsComponent },
  { path: 'detail/:id', component: PatientDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
