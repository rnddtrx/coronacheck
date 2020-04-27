import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoctorComponent } from './view/doctor/doctor.component';
import { PatientComponent } from './view/patient/patient.component';
import { DoctorListComponent } from './view/doctor-list/doctor-list.component';
import { PatientListComponent } from './view/patient-list/patient-list.component';
import { MenuComponent } from './view/menu/menu.component';
import { HomeComponent } from './view/home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './view/login/login.component';
import { HttpInterceptorAuthService } from './service/auth/http-interceptor-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    DoctorListComponent,
    PatientListComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorAuthService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
