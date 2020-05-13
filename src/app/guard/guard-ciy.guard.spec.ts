import { TestBed } from '@angular/core/testing';

import { GuardCiyGuard } from './guard-ciy.guard';

describe('GuardCiyGuard', () => {
  let guard: GuardCiyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardCiyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
