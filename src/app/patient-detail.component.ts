import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Patient }         from './patient';
import { PatientService }  from './patient.service';

@Component({
  selector: 'patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: [ './patient-detail.component.css' ]
})
export class PatientDetailComponent implements OnInit {
  patient: Patient;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.patientService.getPatient(+params.get('id')))
      .subscribe(patient => this.patient = patient);
  }

  goBack(): void {
    this.location.back();
  }
}
