import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountrystatecityService } from 'src/app/services/countrystatecity.service';

@Component({
  selector: 'app-countryhome',
  templateUrl: './countryhome.component.html',
  styleUrls: ['./countryhome.component.css']
})
export class CountryhomeComponent implements OnInit {
  countryList: Country[]=[];
  filterList: Country[]=[];
  storeCountryList:any;

  constructor(
    private countrystatecityService:CountrystatecityService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.countryList=[];
    this.countrystatecityService.getCountryList().subscribe(
      (data:Country[])=>{
        this.countryList=data;
        console.log('COUNTRYLIST FETCHED: ',this.countryList);
        this.storeCountryList=this.countryList;
      },
      (err)=>{
        this.countryList=[]
        console.log('COUNTRYLIST ERROR: ',this.countryList,err);
      },
      ()=>{
        console.log('COUNTRYLIST FETECHED SUCCESSFULLY')
      }
    )
  }

  handleSearchValueEmit(e:any){
    console.log(e)
    this.countryList=this.storeCountryList;
    this.filterList=this.storeCountryList.map((country:any)=>{
      if(country.name.toLowerCase().includes(e)){
        return {...country,show:true};
      }else{
        return {...country,show:false};
      }
    })
    this.countryList=this.filterList.filter((country:any)=>country.show);
    if(e==''){
      this.countryList=this.storeCountryList;  
    }
  }
}
