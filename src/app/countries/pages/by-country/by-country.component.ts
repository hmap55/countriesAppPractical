import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit{
  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term

  }

  @Input()
  public countries:Country[] = [];
  public isLoading:boolean = false;
  public initialValue: string ='';

  searchByCountry(country:string):void{

    this.isLoading = true;
    this.countriesService.serachCountry(country).subscribe(
      conutries => {
        this.countries = conutries;
        this.isLoading = false;
      }
    )

  }

}
