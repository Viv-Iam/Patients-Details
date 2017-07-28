import { Component, OnInit } from '@angular/core';

import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private patinetService: PatientService) { }

  ngOnInit(): void {
    this.patinetService.getPatients()
      .then(patients => this.patients = patients.slice(1, 5));
  }
}
