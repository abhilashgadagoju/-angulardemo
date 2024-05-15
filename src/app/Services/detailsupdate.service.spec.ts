import { TestBed } from '@angular/core/testing';

import { DetailsupdateService } from './detailsupdate.service';

describe('DetailsupdateService', () => {
  let service: DetailsupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
