import { LoginComponent } from './view/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './view/doctor/doctor.component';
import { PatientListComponent } from './view/patient-list/patient-list.component';
import { DoctorListComponent } from './view/doctor-list/doctor-list.component';
import { HomeComponent } from './view/home/home.component';
import { PatientComponent } from './view/patient/patient.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'doctor/:id', component: DoctorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'patient/:id', component: PatientComponent },
  { path: 'patientlist', component: PatientListComponent },
  { path: 'doctorlist', component: DoctorListComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
