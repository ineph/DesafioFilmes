import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoint.service';
import { ActivatedRoute } from '@angular/router';
import { FilmeInterface } from '../models/filme.interface';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

  filme = new FilmeInterface();
  generos: any;

  constructor(
    endpoint: EndpointService,
    rotaAtiva: ActivatedRoute) {

      rotaAtiva.params.subscribe(rota => {
        endpoint.getFilme(rota.id).subscribe(
          res => {
            this.filme = res;
            this.generos = res.genres;
          }
        );
      }
      );
    }

  ngOnInit() {
  }

}
