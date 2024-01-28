import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchByCapital (capital:string): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.apiUrl}/capital/${capital}`).pipe(
      catchError( ()=> of ([]))
    );

  }

}
