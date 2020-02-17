import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoint.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

  filme: {};

  constructor(
    private endpoint: EndpointService,
    private rotaAtiva: ActivatedRoute) {
      this.rotaAtiva.params.subscribe(rota => {
        this.endpoint.getFilme(rota.id).subscribe(
          res => {
            console.log(this.filme = res);
          });
        }
      );
    }

  ngOnInit() {
  }

}
