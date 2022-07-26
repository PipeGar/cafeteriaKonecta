import { TestBed } from '@angular/core/testing';

import { AdminauthenticatedGuard } from './adminauthenticated.guard';

describe('AdminauthenticatedGuard', () => {
  let guard: AdminauthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminauthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
