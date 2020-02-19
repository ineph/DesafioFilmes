import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoint.service';
import { ExplorarFilmesResultsInterface } from '../models/explorar.filmes.results';

@Component({
  selector: 'app-explorar-filmes',
  templateUrl: './explorar-filmes.component.html',
  styleUrls: ['./explorar-filmes.component.scss']
})
export class ExplorarFilmesComponent implements OnInit {

  filmes: ExplorarFilmesResultsInterface;

  constructor(private endpoint: EndpointService) {
    this.endpoint.getExplorarFilmes()
    .subscribe(res => this.filmes = res.results);
  }

  ngOnInit() {
  }

}
