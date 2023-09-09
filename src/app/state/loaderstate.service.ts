import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderstateService {

  loaderSubject$:BehaviorSubject<boolean>=new BehaviorSubject(true);
  constructor() { }
  startLoader(){
    this.loaderSubject$.next(true);
  }
  endLoader(){
    this.loaderSubject$.next(false);
  }
}
