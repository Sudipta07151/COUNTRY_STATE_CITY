import { Component, OnInit,Input } from '@angular/core';
import { Citybycountry } from 'src/app/models/citybycountry';

@Component({
  selector: 'app-citybycountrycard',
  templateUrl: './citybycountrycard.component.html',
  styleUrls: ['./citybycountrycard.component.css']
})
export class CitybycountrycardComponent implements OnInit {
  @Input() city!:Citybycountry;
  constructor() { }

  ngOnInit(): void {
  }

}
