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
