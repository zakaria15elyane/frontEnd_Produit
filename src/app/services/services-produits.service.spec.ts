import { TestBed } from '@angular/core/testing';

import { ServicesProduitsService } from './services-produits.service';

describe('ServicesProduitsService', () => {
  let service: ServicesProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
