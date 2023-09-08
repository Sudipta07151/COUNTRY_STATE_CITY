import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-countrycard',
  templateUrl: './countrycard.component.html',
  styleUrls: ['./countrycard.component.css']
})
export class CountrycardComponent implements OnInit {

  @Input() country!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
