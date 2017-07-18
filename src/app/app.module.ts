import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {resumoComponent} from './resumo.component'
import {TodosOsDadosComponent} from './TodosOsDados.component'
import {DadosDaUFComponent} from './DadosDaUF.component'
@NgModule({
  declarations: [
    AppComponent,
    resumoComponent,
    TodosOsDadosComponent,
    DadosDaUFComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
  {
    path: 'resumo',
    component: resumoComponent
  },
  {
    path: 'todososdados',
    component: TodosOsDadosComponent
  },
  {
    path: 'dadosdauf',
    component: DadosDaUFComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
