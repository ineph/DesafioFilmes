import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../../services/endpoint.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  inputPesquisa = '';
  pesquisaForm;

  constructor(
    private endpoint: EndpointService,
    private formBuilder: FormBuilder) {

      this.pesquisaForm = this.formBuilder.group({
        pesquisa: ''
      });
    }

  ngOnInit() {
  }

  pesquisar(inputPesquisa) {
    console.log(inputPesquisa);
    this.endpoint.getPesquisar(inputPesquisa.pesquisa).subscribe(res => console.log(res)
    );
  }



}
