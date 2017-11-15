import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Tela1Component } from './tela1/tela1.component';
import { Tela2LocalizacaoComponent } from './tela2-localizacao/tela2-localizacao.component';
import { Tela3PrecoComponent } from './tela3-preco/tela3-preco.component';
import { Tela4ServicosComponent } from './tela4-servicos/tela4-servicos.component';
import { Tela5UrnaComponent } from './tela5-urna/tela5-urna.component';
import { Tela6ConfContatoComponent } from './tela6-conf-contato/tela6-conf-contato.component';
import { Tela7AguardeComponent } from './tela7-aguarde/tela7-aguarde.component';
import { Tela8OfertasComponent } from './tela8-ofertas/tela8-ofertas.component';
import { routing } from './app.routing';
import { TelaSepultamentoComponent } from './tela-sepultamento/tela-sepultamento.component';

@NgModule({
  declarations: [
    AppComponent,
    Tela1Component,
    Tela2LocalizacaoComponent,
    Tela3PrecoComponent,
    Tela4ServicosComponent,
    Tela5UrnaComponent,
    Tela6ConfContatoComponent,
    Tela7AguardeComponent,
    Tela8OfertasComponent,
    TelaSepultamentoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
