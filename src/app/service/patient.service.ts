import { HttpClient } from '@angular/common/http';
import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Patient } from '../interface/patient.interface';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  patients: Patient[] = [];

  getPatient(id: any ): Patient {
    return this.patients.find(x => x.id === id);
  }

  getAllPatient() {
    return this.http.get(`${API_URL}/patients`);
  }

}
