import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoint.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  serie = [];

  constructor(
    endpoint: EndpointService,
    rotaAtiva: ActivatedRoute) {
      rotaAtiva.params.subscribe(rota => endpoint.getSerie(rota.id).subscribe(res => console.log(
        this.serie = res)));
     }

  ngOnInit() {
  }

}
