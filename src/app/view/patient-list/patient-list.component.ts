import { DoctorService } from 'src/app/service/doctor.service';
import { DoctorComponent } from './../doctor/doctor.component';
import { Component, OnInit } from '@angular/core';
import { PeopleGeneratorService } from 'src/app/service/people-generator.service';
import { Patient } from 'src/app/interface/patient.interface';
import { PatientService } from 'src/app/service/patient.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor(private peopleService: PeopleGeneratorService,
              private patientService: PatientService
    ) { }

  patients: Patient[];

  ngOnInit(): void {
    this.patients = this.patientService.patients;
    this.patientService.getAllPatient().subscribe(
        response => {
          this.patientService.patients = (response as Array<Patient>);
        }
    );

  }

  createPatient() {
    this.peopleService.getOnePerson().subscribe(
    response => {
        let pat: Patient = {
          id: Guid.raw (),
          firstName: response['results'][0].name.first,
          lastName: response['results'][0].name.last,
          requests: null
        };
        this.patients.push(pat);
        //this.patients = this.patientService.patients;
      }
    );
  }

}
