import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 5 + 5 = 10', 
  inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(5,5, CalculadoraService.SOMA)
    expect(soma).toEqual(10);
    })
  );

  it('deve garantir que 5 - 3 = 2', 
  inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(5,3, CalculadoraService.SUBTRACAO)
    expect(subtracao).toEqual(2);
    })
  );

  it('deve garantir que 5 * 6 = 30', 
  inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(5,6, CalculadoraService.MULTIPLICACAO)
    expect(multiplicacao).toEqual(30);
    })
  );

  it('deve garantir que 81 / 9 = 9', 
  inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(81,9, CalculadoraService.DIVISAO)
    expect(divisao).toEqual(9);
    })
  );

})
