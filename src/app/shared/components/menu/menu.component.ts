import { Component, OnInit } from '@angular/core';

import { EndpointService } from '../../services/endpoint.service';
import { PesquisaService } from '../../services/pesquisa.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  resultadosPesquisa: [];
  tipoPesquisa = '';

  constructor(
    private endpoint: EndpointService,
    public pesquisaService: PesquisaService) {}

  ngOnInit() {
  }

  selecaoPesquisa(tipo) {
    console.log(this.tipoPesquisa = tipo);
  }

  pesquisar(inputPesquisa: string, tipo: string) {
    tipo = this.tipoPesquisa;
    if (inputPesquisa.length > 1 ) {

      if (tipo === 'serie') {
        console.log('input pesquisa: ', inputPesquisa);

        this.endpoint.getPesquisarSerie(inputPesquisa)
        .subscribe(resPes => console.log(this.resultadosPesquisa = resPes.results));
      } else {
        console.log('input pesquisa: ', inputPesquisa);

        this.endpoint.getPesquisarFilme(inputPesquisa)
        .subscribe(resPes => console.log(this.resultadosPesquisa = resPes.results));
      }
    }
  }

}
