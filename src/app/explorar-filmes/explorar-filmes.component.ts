import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoint.service';

@Component({
  selector: 'app-explorar-filmes',
  templateUrl: './explorar-filmes.component.html',
  styleUrls: ['./explorar-filmes.component.scss']
})
export class ExplorarFilmesComponent implements OnInit {

  filmes: [];

  constructor(private endpoint: EndpointService) {
    this.endpoint.getDescobirFilmes().subscribe(res => this.filmes = res.results);
  }

  ngOnInit() {
  }

}
