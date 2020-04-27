import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleGeneratorService {

  constructor(private http: HttpClient) { }

  getOnePerson() {
    return this.http.get(`https://randomuser.me/api/?results=1`);
  }

}
