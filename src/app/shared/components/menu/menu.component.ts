import { Component, OnInit } from '@angular/core';

import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  resultadosPesquisa: [];
  tipoPesquisa = '';

  constructor(private endpoint: EndpointService) {}

  ngOnInit() {
  }

  selecaoPesquisa(tipo) {
    this.tipoPesquisa = tipo;
  }

  pesquisar(inputPesquisa: string, tipo: string) {
    tipo = this.tipoPesquisa;
    if (inputPesquisa.length > 1 ) {

      if (tipo === 'serie') {

        this.endpoint.getPesquisarSerie(inputPesquisa)
        .subscribe(resPes => this.resultadosPesquisa = resPes.results);
      } else {
        this.endpoint.getPesquisarFilme(inputPesquisa)
        .subscribe(resPes => this.resultadosPesquisa = resPes.results);
      }
    }
  }

}
