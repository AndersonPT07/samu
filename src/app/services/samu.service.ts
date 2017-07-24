import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { DadosNew } from '../types/samu.new';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

import {UFService} from './uf.service';

@Injectable()
export class SamuService {
  dados : DadosNew[] = [];

  constructor(private ufService: UFService) {
    VALORES.forEach((dado) =>
      this.dados.push(new DadosNew(this.ufService.getPorID(dado.uf_id), dado.valor, dado.ano))
    )
  }

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }

  getAllNew(): DadosNew[] {
    return this.dados;
  }
}
