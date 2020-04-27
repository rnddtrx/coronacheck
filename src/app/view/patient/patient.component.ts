import { Component, OnInit } from '@angular/core';
import { PeopleGeneratorService } from 'src/app/service/people-generator.service';
import { Patient } from 'src/app/interface/patient.interface';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';
import { FormBuilder } from '@angular/forms';
import { Doctor } from 'src/app/interface/doctor.interface';
import { DoctorService } from 'src/app/service/doctor.service';
import { Guid } from 'guid-typescript';
import { Request } from 'src/app/interface/request.interface';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: Patient;
  doctors: Doctor[];

  requestForm = this.fb.group({
    cough: [false],
    fever: [false],
    difficultyToBreath: [false],
    doctor: []
  });

  constructor(private route: ActivatedRoute,
              private patientService: PatientService,
              private doctorService: DoctorService,
              private requestService: RequestService,
              private fb: FormBuilder
              ) { }

  ngOnInit(): void {
    this.doctors = this.doctorService.doctors;
    const id = this.route.snapshot.params.id;
    this.patient = this.patientService.getPatient(id);
  }

  onSubmit(){
    console.log("submit");
    console.log(this.requestForm.value);
    let req: Request = {
      id: Guid.raw (),
      patient: this.patient,
      doctor : this.doctorService.getDoctor(this.requestForm.value.doctor),
      date: new Date(Date.now()),
      cough: this.requestForm.value.cough,
      fever: this.requestForm.value.fever,
      difficutyToBreath: this.requestForm.value.difficultyToBreath,
      covidStatus: null
    };

    //Liste request
    this.requestService.requests.push(req);
    this.patient.requests = req;
    let doctor = this.doctorService.getDoctor(this.requestForm.value.doctor);
    doctor.requests.push(req);
  }

}
