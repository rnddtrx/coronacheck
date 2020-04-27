import { Request } from 'src/app/interface/request.interface';
export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  requests: Request;
}
