// Angular Imports
import { Component, OnInit } from '@angular/core';

// Models Imports
import { Brewerie } from 'src/app/models/brewerie';

// Services Imports
import { BeerService } from '../services';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  breweries: Brewerie[] = [];
  beers: Beer[] = [];

  constructor(
    private beerService: BeerService,
  ) { }

  ngOnInit(): void {
    this.getBreweries();
    this.getBeers();
  }

  getBreweries(): void {
    this.beerService
      .getBreweries()
      .subscribe((response: any) => {
        this.breweries = [ ... response ];
      });
  }

  getBeers(): void {
    this.beerService
      .getBeers()
      .subscribe((response: any) => {
        this.beers = [ ... response ];
      });
  }
}
