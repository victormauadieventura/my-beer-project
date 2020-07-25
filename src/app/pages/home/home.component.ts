// Angular Imports
import { Component, OnInit } from '@angular/core';

// Models Imports
import { Brewerie } from 'src/app/models/brewerie';

// Services Imports
import { BeerService } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  breweries: Brewerie[] = [];

  constructor(
    private beerService: BeerService,
  ) { }

  ngOnInit(): void {
    this.getBreweries();
  }

  getBreweries(): void {
    this.beerService
      .getBreweries()
      .subscribe((response: any) => {
        this.breweries = [ ... response ];
      });
  }
}
