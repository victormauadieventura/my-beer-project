// Angular Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// External Libs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Environment Imports
import { environment } from '../../../environments/environment';

// Models Imports
import { Brewerie } from 'src/app/models/brewerie';
import { Beer } from 'src/app/models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private readonly apiPathOpenBrewery = `${ environment.api_url_openbrewerydb }`;
  private readonly apiPathPunk = `${ environment.api_url_punkapi}`;

  constructor(private http: HttpClient) {}

  getBreweries(): Observable<Brewerie> {
    const url = `${this.apiPathOpenBrewery}/breweries?by_city=san_diego`;
    return this.http.get<Brewerie>(url)
      .pipe(
        map(brewerie => {
          console.log(brewerie);
          return brewerie;
        }),
      );
  }

  getBeers(): Observable<Beer> {
    const url = `${this.apiPathPunk}/beers`;
    return this.http.get<Beer>(url)
      .pipe(
        map(beers => {
          console.log(beers);
          return beers;
        }),
      );
  }
}
