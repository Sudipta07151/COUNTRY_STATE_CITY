import { Component, OnInit,Input } from '@angular/core';
import { StatebyCountry } from 'src/app/models/statebycountry';

@Component({
  selector: 'app-statebycountrycard',
  templateUrl: './statebycountrycard.component.html',
  styleUrls: ['./statebycountrycard.component.css']
})
export class StatebycountrycardComponent implements OnInit {
  @Input() state!:StatebyCountry;
  constructor() { }

  ngOnInit(): void {
  }

}
