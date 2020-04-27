import { Request } from 'src/app/interface/request.interface';
export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  requests: Request[];
}
