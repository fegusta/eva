// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { ControleFinanceiroComponent } from './components/controle-financeiro/controle-financeiro.component';
import { ControleTreinoComponent } from './components/controle-treino/controle-treino.component';
import { ColecaoQuadrinhosComponent } from './components/colecao-quadrinhos/colecao-quadrinhos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


import { FormsModule } from '@angular/forms';
import { ListaDeComprasService } from './components/lista-de-compras/lista-de-compras.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeComprasComponent,
    ControleFinanceiroComponent,
    ControleTreinoComponent,
    ColecaoQuadrinhosComponent,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListaDeComprasService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Adicione esta linha
})
export class AppModule { }
