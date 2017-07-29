import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Patient } from './patient';

@Injectable()
export class PatientService {
private patientsUrl = 'api/patients';

constructor(private http: Http) { }

getPatients(): Promise<Patient[]> {
return this.http.get(this.patientsUrl)
           .toPromise()
           .then(response => response.json().data as Patient[])
           .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
console.error('An error occurred', error);
return Promise.reject(error.message || error);
}

  getPatient(id: number): Promise<Patient> {
    return this.getPatients()
               .then(patients => patients.find(patient => patient.id === id));
  }
}
