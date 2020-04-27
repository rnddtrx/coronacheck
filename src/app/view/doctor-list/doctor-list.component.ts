import { Component, OnInit } from '@angular/core';
import { PeopleGeneratorService } from 'src/app/service/people-generator.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { Doctor } from 'src/app/interface/doctor.interface';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  constructor(private peopleService: PeopleGeneratorService,
    private doctorService: DoctorService
    ) { }

  doctors: Doctor[];

  ngOnInit(): void {
    this.doctors = this.doctorService.doctors;
  }

  createDoctor() {
    this.peopleService.getOnePerson().subscribe(
    response => {
      let doc: Doctor = {
          id: Guid.raw (),
          firstName: response['results'][0].name.first,
          lastName: response['results'][0].name.last,
          requests: []
        };
      this.doctorService.doctors.push(doc);
      this.doctors = this.doctorService.doctors;
      }
    );
  }

}
