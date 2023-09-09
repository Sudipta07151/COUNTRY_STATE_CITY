import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Citybycountry } from 'src/app/models/citybycountry';
import { Countrysolo } from 'src/app/models/countrysolo';
import { StatebyCountry } from 'src/app/models/statebycountry';
import { CountrystatecityService } from 'src/app/services/countrystatecity.service';

@Component({
  selector: 'app-individualcard',
  templateUrl: './individualcard.component.html',
  styleUrls: ['./individualcard.component.css']
})
export class IndividualcardComponent implements OnInit {
  country!: Countrysolo;
  stateListByCountry!: StatebyCountry[];
  cityListByCountry!: Citybycountry[];
  constructor(
    private avr:ActivatedRoute,
    private countrystatecityService:CountrystatecityService
    ) { }

  ngOnInit(): void {
    const iso_code_passed=this.avr.snapshot.paramMap.get('id');
    console.log(iso_code_passed)
    this.getCountryData(iso_code_passed,()=>this.getStateListByCountry(iso_code_passed,()=>this.getCityListByCountry(iso_code_passed)))
  }

  getCountryData(iso_code_passed:any,callback?:Function){
    this.countrystatecityService.getCountry(iso_code_passed!).subscribe(
      (data)=>{
        console.log(data)
        this.country=data;
        if(callback)
        callback();
      },
      (err)=>console.log(err),
      ()=>console.log('finally')
    )
  }
  getStateListByCountry(e:any,callback:Function){
    console.log(e)
    this.stateListByCountry=[];
    this.countrystatecityService.getStateListByCountryISO(e).subscribe(
      (data:StatebyCountry[])=>{
        console.log(data)
        this.stateListByCountry=data;
        callback();
      },
      (err)=>console.log(err),
      ()=>console.log('FINISHED')
    );
   }

   getCityListByCountry(e:any){
    this.cityListByCountry=[];
    this.countrystatecityService.getCityListByCountryISO(e).subscribe(
      (data:Citybycountry[])=>{
        console.log(data)
        this.cityListByCountry=data;
      },
      (err)=>console.log(err),
      ()=>console.log('FINISHED')
    );
   }

}
