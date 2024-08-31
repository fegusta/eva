import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { ControleFinanceiroComponent } from './components/controle-financeiro/controle-financeiro.component';
import { ControleTreinoComponent } from './components/controle-treino/controle-treino.component';
import { ColecaoQuadrinhosComponent } from './components/colecao-quadrinhos/colecao-quadrinhos.component';

export const routes: Routes = [
    { path: 'lista-de-compras', component: ListaDeComprasComponent},
    { path: 'controle-financeiro', component: ControleFinanceiroComponent},
    { path: 'controle-treino', component: ControleTreinoComponent},
    { path: 'colecao-quadrinhos', component: ColecaoQuadrinhosComponent},
    { path: '', redirectTo: '/lista-de-compras', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }