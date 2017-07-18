import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './TodosOsDados.component.html',
  styleUrls: ['./app.component.css']
})

export class TodosOsDadosComponent implements OnInit {
    ufs : UF[];
    dados_da_samu : Dados[];
    minhaUF : UF;
    numero_magico = 12;
    dadosSamu : Dados;
    atendimentos = 0;
    numerosDeAtendimento = 0;
    media = 0;
    final : Dados[] = [];


    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.getPorID(this.numero_magico);
        this.getPorUFMunicipiosAtendidosPorEstado(this.minhaUF);
        this.numerosdeatendimentoemedia();
}

getPorID(id: number): void {
for(let item of this.ufs){
  if(item.id == id){
    this.minhaUF = item;
    }
  }
}

getPorUFMunicipiosAtendidosPorEstado(ufselecionada: UF): void{
  for(let item of this.dados_da_samu){
    if(item.uf_id == ufselecionada.id){
      this.final.push(item);
    }
  }
}

numerosdeatendimentoemedia(): void{
for(let item2 of this.dados_da_samu){
  if(item2.uf_id == this.numero_magico){
    this.atendimentos = this.atendimentos + item2.uf_id;
    this.numerosDeAtendimento = this.numerosDeAtendimento + 1
    }
  }
  this.media = this.atendimentos/this.numerosDeAtendimento;
}

}
