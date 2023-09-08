import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';
import { State } from '../models/state';
import { StatebyCountry } from '../models/statebycountry';

@Injectable({
  providedIn: 'root'
})
export class CountrystatecityService {

  httpHeader!:HttpHeaders;
  constructor(
    private http:HttpClient
  ) { 
    this.httpHeader=new HttpHeaders({
      'X-CSCAPI-KEY':environment.api_key
    });
  }

  getCountryList():Observable<Country[]>{
    const endpoint=environment.country_state_city_api+environment.countries
    return this.http.get<Country[]>(endpoint,{
      headers:this.httpHeader
    });
  }

  getCountry(country_iso2:string):Observable<Country>{
    const endpoint=environment.country_state_city_api+environment.countries+country_iso2
    return this.http.get<Country>(endpoint,{
      headers:this.httpHeader
    });
  }

  getStateList():Observable<State[]>{
    const endpoint=environment.country_state_city_api+environment.states
    return this.http.get<State[]>(endpoint,{
      headers:this.httpHeader
    });
  }

  getStateListByCountryISO(iso_code:string):Observable<StatebyCountry[]>{
    const endpoint=environment.country_state_city_api+environment.countries+'/'+iso_code+environment.states
    return this.http.get<StatebyCountry[]>(endpoint,{
      headers:this.httpHeader
    });
  }
}
