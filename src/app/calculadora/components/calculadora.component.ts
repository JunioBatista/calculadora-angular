import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1:string;
  private numero2:string;
  private resultado:number;
  private operacao:string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar()
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  concatenaNumero(numAtual: string, numConcat: string): string {

    if (numAtual === '0' || numAtual === null) {
      return numAtual = '';
    }

    if (numConcat === '.' && numAtual === '') {
      return '0.'
    }

    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual+numConcat;
  }

}
