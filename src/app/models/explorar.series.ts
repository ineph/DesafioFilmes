import { ExplorarSeriesResultsInterface } from './explorar.series.results';

export class ExplorarSerieInterface {
  page: number;
  results: ExplorarSeriesResultsInterface;
  total_results: number;
  total_pages: number;
}