import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../shared/services/endpoint.service';
import { ExplorarSeriesResultsInterface } from '../models/explorar.series.results';

@Component({
  selector: 'app-explorar-series',
  templateUrl: './explorar-series.component.html',
  styleUrls: ['./explorar-series.component.scss']
})
export class ExplorarSeriesComponent implements OnInit {

  series: ExplorarSeriesResultsInterface;

  constructor(private endpoint: EndpointService) {
    this.endpoint.getExplorarSeries()
    .subscribe(res => this.series = res.results);

   }

  ngOnInit() {
  }

}
