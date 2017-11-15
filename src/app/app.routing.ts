import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { Tela1Component } from './tela1/tela1.component';
import { Tela2LocalizacaoComponent } from './tela2-localizacao/tela2-localizacao.component';
import { Tela3PrecoComponent } from './tela3-preco/tela3-preco.component';
import { TelaSepultamentoComponent } from './tela-sepultamento/tela-sepultamento.component';
import { Tela4ServicosComponent } from './tela4-servicos/tela4-servicos.component';
import { Tela5UrnaComponent } from './tela5-urna/tela5-urna.component';
import { Tela6ConfContatoComponent } from './tela6-conf-contato/tela6-conf-contato.component';
import { Tela7AguardeComponent } from './tela7-aguarde/tela7-aguarde.component';
import { Tela8OfertasComponent } from './tela8-ofertas/tela8-ofertas.component';

// Criando as associações para cada componente

const APP_ROUTES: Routes = [
    { path: '', component: Tela1Component },
    { path: 'localizacao', component: Tela2LocalizacaoComponent },
    { path: 'preco', component: Tela3PrecoComponent },
    { path: 'sepultamento', component: TelaSepultamentoComponent },
    { path: 'servicos', component: Tela4ServicosComponent },
    { path: 'urna', component: Tela5UrnaComponent },
    { path: 'confContato', component: Tela6ConfContatoComponent },
    { path: 'aguarde', component: Tela7AguardeComponent },
    { path: 'ofertas', component: Tela8OfertasComponent }
];


// Criando constante que será respons

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);