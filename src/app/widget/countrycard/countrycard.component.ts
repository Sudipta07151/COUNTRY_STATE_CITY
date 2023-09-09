import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-countrycard',
  templateUrl: './countrycard.component.html',
  styleUrls: ['./countrycard.component.css']
})
export class CountrycardComponent implements OnInit {

  @Input() country!:Country;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  clickCard(iso_code:string){
    const endppoint=`countryhome/country/${iso_code}`
    this.router.navigateByUrl(endppoint);
  }
}
