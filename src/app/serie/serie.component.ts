import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoint.service';
import { ActivatedRoute } from '@angular/router';
import { SerieInterface } from '../models/serie.interface';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  serie = new SerieInterface();
  generos: any;

  constructor(
    endpoint: EndpointService,
    rotaAtiva: ActivatedRoute) {

      rotaAtiva.params.subscribe(rota => {
        endpoint.getSerie(rota.id).subscribe(
          res => {
            this.serie = res;
            this.generos = res.genres;
          }
        );
      }
      );
     }

  ngOnInit() {
  }

}
