import { TestBed } from '@angular/core/testing';

import { RequestPokeApiService } from './request-poke-api.service';

describe('RequestPokeApiService', () => {
  let service: RequestPokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestPokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
