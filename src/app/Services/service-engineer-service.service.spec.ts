import { TestBed } from '@angular/core/testing';

import { ServiceEngineerServiceService } from './service-engineer-service.service';

describe('ServiceEngineerServiceService', () => {
  let service: ServiceEngineerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEngineerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
