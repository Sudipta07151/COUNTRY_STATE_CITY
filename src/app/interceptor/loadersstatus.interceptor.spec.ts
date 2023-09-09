import { TestBed } from '@angular/core/testing';

import { LoadersstatusInterceptor } from './loadersstatus.interceptor';

describe('LoadersstatusInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadersstatusInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadersstatusInterceptor = TestBed.inject(LoadersstatusInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
