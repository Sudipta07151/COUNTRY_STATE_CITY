import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { CountrystatecityService } from 'src/app/services/countrystatecity.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  userList:User[]=[];
  countryList: Country[]=[];


  constructor(
    private usersService:UsersService,
  ) { }

  ngOnInit(): void {
    
  }

}
