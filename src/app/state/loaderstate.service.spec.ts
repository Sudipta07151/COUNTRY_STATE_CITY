import { TestBed } from '@angular/core/testing';

import { LoaderstateService } from './loaderstate.service';

describe('LoaderstateService', () => {
  let service: LoaderstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
