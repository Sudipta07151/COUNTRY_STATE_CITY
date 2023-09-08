import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {User} from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpHeader!:HttpHeaders;
  constructor(
    private http:HttpClient
  ) { 
    this.httpHeader=new HttpHeaders({
      'app-id':environment.app_id
    });
  }

  getUserList():Observable<User[]>{
    const endpoint=environment.url_endpoint+environment.userlist
    return this.http.get<User[]>(endpoint,{
      headers:this.httpHeader
    });
  }
}
