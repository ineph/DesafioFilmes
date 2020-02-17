import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoint.service';

@Component({
  selector: 'app-explorar-series',
  templateUrl: './explorar-series.component.html',
  styleUrls: ['./explorar-series.component.scss']
})
export class ExplorarSeriesComponent implements OnInit {

  series = [];

  constructor(private endpoint: EndpointService) {
    this.endpoint.getDescobrirSeries().subscribe(res => console.log(
     this.series = res.results));

   }

  ngOnInit() {
  }

}
