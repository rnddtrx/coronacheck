import { Injectable } from '@angular/core';
import { Doctor } from '../interface/doctor.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor() { }

  doctors: Doctor[] = [];

  getDoctor(id: any): Doctor {
    return this.doctors.find(x => x.id === id);
  }
}
