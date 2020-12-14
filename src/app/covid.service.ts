import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class CovidService {

  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://api.covid19api.com/summary';


  public getCovidSummary(){
    return this.httpClient.get(this.apiUrl);
    
  }
}
