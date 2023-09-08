import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-usercardwidget',
  templateUrl: './usercardwidget.component.html',
  styleUrls: ['./usercardwidget.component.css']
})
export class UsercardwidgetComponent implements OnInit {

  @Input() userList:any;
  constructor() { }

  ngOnInit(): void {
  }

}
