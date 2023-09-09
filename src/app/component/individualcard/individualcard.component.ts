import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countrysolo } from 'src/app/models/countrysolo';
import { CountrystatecityService } from 'src/app/services/countrystatecity.service';

@Component({
  selector: 'app-individualcard',
  templateUrl: './individualcard.component.html',
  styleUrls: ['./individualcard.component.css']
})
export class IndividualcardComponent implements OnInit {
  country!: Countrysolo;
  constructor(
    private avr:ActivatedRoute,
    private countrystatecityService:CountrystatecityService
    ) { }

  ngOnInit(): void {
    const iso_code_passed=this.avr.snapshot.paramMap.get('id');
    console.log(iso_code_passed)
    this.countrystatecityService.getCountry(iso_code_passed!).subscribe(
      (data)=>{
        console.log(data)
        this.country=data;
      },
      (err)=>console.log(err),
      ()=>console.log('finally')
    )
  }

}
