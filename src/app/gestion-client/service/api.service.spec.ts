import { TestBed } from '@angular/core/testing';

import { ApiServices } from './apiClient.service';

describe('ApiService', () => {
  let service: ApiServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
