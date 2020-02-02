import { TestBed } from '@angular/core/testing';

import { PostloginService } from './postlogin.service';

describe('PostloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostloginService = TestBed.get(PostloginService);
    expect(service).toBeTruthy();
  });
});
