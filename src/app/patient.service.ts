import { Patient } from './patient';
import { PATIENTS } from './mock-patients';
import { Injectable } from '@angular/core';

@Injectable()
export class PatientService {
  getPatients(): Promise<Patient[]> {
    return Promise.resolve(PATIENTS);
  }

  getPatientsSlowly(): Promise<Patient[]> {
    return new Promise(resolve => {

      setTimeout(() => resolve(this.getPatients()), 2000);
    });
  }

  getPatient(id: number): Promise<Patient> {
    return this.getPatients()
               .then(patients => patients.find(patient => patient.id === id));
  }
}
