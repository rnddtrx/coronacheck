import { Injectable } from '@angular/core';
import { Request } from 'src/app/interface/request.interface';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  requests: Request[] = [];

  getRequest(id: any): Request {
    return this.requests.find(x => x.id === id);
  }


}
