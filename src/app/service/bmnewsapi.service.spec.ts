import { TestBed } from '@angular/core/testing';

import { BmnewsapiService } from './bmnewsapi.service';

describe('BmnewsapiService', () => {
  let service: BmnewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmnewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
