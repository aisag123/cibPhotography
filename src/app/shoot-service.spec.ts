import { TestBed } from '@angular/core/testing';

import { ShootService } from './shoot-service';

describe('ShootService', () => {
  let service: ShootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
