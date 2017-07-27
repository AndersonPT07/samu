import { Component, OnInit } from '@angular/core';

import {DadoNome} from './types/modelonovo';
import {ModeloNovoService} from './services/modelonovo.service'

@Component({
  selector: 'app-root',
  templateUrl: './TodosOsDados.component.html',
  styleUrls: ['./app.component.css']
})
export class TodosOsDadosComponent implements OnInit {
    dados: DadoNome[];

    constructor(private modeloNovoService: ModeloNovoService)
    { }

    ngOnInit(): void {
        this.dados = this.modeloNovoService.mesclardados();
    }
}
