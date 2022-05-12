import { TestBed } from '@angular/core/testing';

import { NeumorphyUIService } from './neumorphy-ui.service';

describe('NeumorphyUIService', () => {
  let service: NeumorphyUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeumorphyUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
