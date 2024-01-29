import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {
  constructor(private countriesService:CountriesService){}

  @Input()
  public countries:Country[] = [];

  searchByCountry(country:string):void{

    this.countriesService.serachCountry(country).subscribe(
      conutries => {
        this.countries = conutries;
      }
    )

  }

}
