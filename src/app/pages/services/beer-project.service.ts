// Angular Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// External Libs
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// Environment Imports
import { environment } from '../../../environments/environment';

// Models Imports
import { Brewerie } from 'src/app/models/brewerie';

@Injectable({
  providedIn: 'root'
})
export class PublicWebGisService {

  private readonly apiPath = `${ environment.api_url }`;

  constructor(private http: HttpClient) {}

  getBreweries(): Observable<Brewerie> {
    const url = `${this.apiPath}/breweries`;
    return this.http.get<Brewerie>(url);
  }
}
