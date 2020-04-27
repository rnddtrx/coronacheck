import { Patient } from './patient.interface';
import { Doctor } from './doctor.interface';

export interface Request {
  id: string;
  patient: Patient;
  doctor: Doctor;
  date: Date;
  cough: boolean;
  fever: boolean;
  difficutyToBreath: boolean;
  covidStatus: boolean;
}
