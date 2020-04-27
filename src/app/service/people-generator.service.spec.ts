import { TestBed } from '@angular/core/testing';

import { PeopleGeneratorService } from './people-generator.service';

describe('PeopleGeneratorService', () => {
  let service: PeopleGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
