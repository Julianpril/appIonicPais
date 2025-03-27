import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: string = 'https://restcountries.com/v3.1/all?fields=name,cca2,flags,coatOfArms,capital,region,subregion,population';

  constructor() {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl);
  }
}
