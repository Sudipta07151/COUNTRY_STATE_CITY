import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statecard',
  templateUrl: './statecard.component.html',
  styleUrls: ['./statecard.component.css']
})
export class StatecardComponent implements OnInit {
  @Input() state!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
