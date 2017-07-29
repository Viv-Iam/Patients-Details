import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'my-patients',
  templateUrl: './patients.component.html',
  styleUrls: [ './patients.component.css' ]
})
export class PatientsComponent implements OnInit {
  patients: Patient[];
  selectedPatient: Patient;

  constructor(
    private router: Router,
    private patientService: PatientService) { }

  getPatients(): void {
    this.patientService.getPatients().then(patients => this.patients = patients);
  }

  ngOnInit(): void {
    this.getPatients();
  }

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPatient.id]);
  }

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.patientService.create(name)
    .then(patient => {
      this.patients.push(patient);
      this.selectedPatient = null;
    });
}

delete(patient: Patient): void {
  this.patientService
      .delete(patient.id)
      .then(() => {
        this.patients = this.patients.filter(h => h !== patient);
        if (this.selectedPatient === patient) { this.selectedPatient = null; }
      });
}

}
