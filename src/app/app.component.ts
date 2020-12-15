import { Component, ViewChild } from '@angular/core';
import {CovidService} from './covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  constructor(private covidService: CovidService) {}

  title = 'my-app';  
  data  = [];
  sortedData =[];
 
  ngOnInit(){
    this.covidService.getCovidSummary().subscribe((res:any )=>{
      this.data = res.Countries;
      // sort try
      const data = this.data.slice();
  
      this.sortedData = data.sort((a, b) => {
        return (this.compare(a.TotalDeaths, b.TotalDeaths));
        }).slice(0,10);
    });
  
  }
  compare(total1: number | string, total2: number | string) {
    return (total1 > total2 ? -1 : 1);
  }
}
