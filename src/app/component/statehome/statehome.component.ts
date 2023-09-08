import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/state';
import { StatebyCountry } from 'src/app/models/statebycountry';
import { CountrystatecityService } from 'src/app/services/countrystatecity.service';

@Component({
  selector: 'app-statehome',
  templateUrl: './statehome.component.html',
  styleUrls: ['./statehome.component.css']
})
export class StatehomeComponent implements OnInit {
  stateList: State[]=[];
  filterList: State[]=[];
  storeStateList:any;

  mapDropDownISOValuesList: { iso_code: string; }[]=[];
  radioInputList=[
    {value:'ALL STATES',name:'ALL STATES',id:'ALL_STATES'},
    {value:'STATE BY COUNTRY',name:'STATE BY COUNTRY',id:'STATE_BY_COUNTRY'}
  ]
  showByDefault=this.radioInputList[0].value;
  stateListByCountry: StatebyCountry[]=[];

  constructor(
    private countrystatecityService:CountrystatecityService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.stateList=[];
    this.countrystatecityService.getStateList().subscribe(
      (data:State[])=>{
        this.stateList=data;
        console.log('STATELIST FETCHED: ',this.stateList);
        this.storeStateList=this.stateList;
        this.mapDropDownISOValues(this.storeStateList)
      },
      (err)=>{
        this.stateList=[]
        console.log('STATELIST ERROR: ',this.stateList,err);
      },
      ()=>{
        console.log('STATELIST FETECHED SUCCESSFULLY')
      }
    )
  }

  handleSearchValueEmit(e:any){
    console.log(e)
    this.stateList=this.storeStateList;
    this.filterList=this.storeStateList.map((country:any)=>{
      if(country.name.toLowerCase().includes(e)){
        return {...country,show:true};
      }else{
        return {...country,show:false};
      }
    })
    this.stateList=this.filterList.filter((country:any)=>country.show);
    if(e==''){
      this.stateList=this.storeStateList;  
    }
  }

  mapDropDownISOValues(list:State[]){
    this.mapDropDownISOValuesList=list.map((el)=>{
     return {iso_code:el.iso2}
    })
    console.log(this.mapDropDownISOValuesList)
   }
   handledropdownvaluesEmit(e:any){
    console.log(e)
    this.stateListByCountry=[];
    this.countrystatecityService.getStateListByCountryISO(e).subscribe(
      (data:StatebyCountry[])=>{
        console.log(data)
        this.stateListByCountry=data;
      },
      (err)=>console.log(err),
      ()=>console.log('FINISHED')
    );
   }
   handleLinkClick(e:Event){
    console.log(e)
   }
   handleClickRadioEvent(e:any){
      console.log(e)
      this.showByDefault=e;
   }
}
