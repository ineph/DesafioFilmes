import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoint.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

  filme: [];

  constructor(
    endpoint: EndpointService,
    rotaAtiva: ActivatedRoute) {

      rotaAtiva.params.subscribe(rota => {
        endpoint.getFilme(rota.id).subscribe(
          res => {
            console.log(this.filme = res);
          });
        }
      );
    }

  ngOnInit() {
  }

}
