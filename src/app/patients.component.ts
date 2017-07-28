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
}
