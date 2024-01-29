import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  @Input()
  public countries: Country[] = []

  constructor(private countriesService:CountriesService){}

  searchByRegion(region:string):void{
    this.countriesService.serachRegion(region).subscribe(
      countries => {
        this.countries = countries;
      }
    )
  }



}
