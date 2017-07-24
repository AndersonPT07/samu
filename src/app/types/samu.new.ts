import { UF } from './uf';

export class DadosNew {
    uf: UF;
    valor: number;
    ano: number;

    constructor(uf: UF, valor: number, ano: number) {
      this.uf = uf;
      this.valor = valor;
      this.ano = ano;
    }
}
