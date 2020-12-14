import { Component } from '@angular/core';

import {CovidService} from './covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})


export class AppComponent {
  title = 'my-app';
  
  countryList:any;

  data  = [];
  

  constructor(private covidService: CovidService) {}
  ngOnInit(){
    this.covidService.getCovidSummary().subscribe((res:any )=>{
      this.data = res.Countries;
      console.log(this.data);
    });
  }
}