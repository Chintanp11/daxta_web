import { TestBed } from '@angular/core/testing';

import { LanguageDetectService } from './language-detect.service';

describe('LanguageDetectService', () => {
  let service: LanguageDetectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageDetectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
