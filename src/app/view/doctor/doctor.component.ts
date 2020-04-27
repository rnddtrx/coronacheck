import { Request } from './../../interface/request.interface';
import { PeopleGeneratorService } from './../../service/people-generator.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { Doctor } from 'src/app/interface/doctor.interface';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private doctorService: DoctorService) { }

  doctor: Doctor;

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.doctor = this.doctorService.getDoctor(id);
  }

  switch(req: Request) {
    if (req.covidStatus == null) {
      req.covidStatus = true;
    } else {
      req.covidStatus = ! req.covidStatus;
    }
  }

}
