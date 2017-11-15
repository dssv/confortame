import { TestBed, inject } from '@angular/core/testing';

import { InformacoesService } from './informacoes.service';

describe('InformacoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformacoesService]
    });
  });

  it('should be created', inject([InformacoesService], (service: InformacoesService) => {
    expect(service).toBeTruthy();
  }));
});
