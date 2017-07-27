import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SamuService {
  private samuUrl = 'in-memory-data.service';  // URL to web api

  constructor(private http: Http) { }

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return this.http.get(this.samuUrl)
             .toPromise().then(response => response.json().data as Dados[])
             .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
  geMediaMunicipios(id: number): number{
    let numero: number;
    numero = 0;
    let anos: number;
    anos = 0;
    for(let entrada of VALORES)
    {
      if(entrada.uf_id == id)
      {
        numero += entrada.valor;
        anos++;
      }
    }
    return Math.round(numero/anos);
  }
  getMunicipiosPorAno(uf: UF): Dados[]{
    let valores: Dados[] = [];
    let i: number;
    i = 0;
    for(let entrada of VALORES)
    {
      if(entrada.uf_id == uf.id)
      {
        valores[i] = entrada;
        i++;
      }
    }
    return valores;
  }
}
