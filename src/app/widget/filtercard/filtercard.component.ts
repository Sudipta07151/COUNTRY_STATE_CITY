import { Component, ElementRef, EventEmitter, Input, OnInit,Output, ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-filtercard',
  templateUrl: './filtercard.component.html',
  styleUrls: ['./filtercard.component.css']
})
export class FiltercardComponent implements OnInit {
  @Input() placeholderValue!:string;
  formGroup!:FormGroup;
  @ViewChild('filterInput',{static:true}) filterInput!:ElementRef;
  @Output() searchValueEmit:EventEmitter<Event>=new EventEmitter();
  constructor() { 
    
    this.formGroup=new FormGroup({
      'seachBox': new FormControl()
    })
  }

  handleFormSubmit(){
    if(this.formGroup.status=='VALID'){
      console.log(this.formGroup)
      const searchValue=this.formGroup.get('seachBox')!.value;
      console.log(searchValue);
      this.searchValueEmit.emit(searchValue);
    }
  }
  ngOnInit(): void {
    const keyUpFilterInput$=fromEvent(this.filterInput.nativeElement,'keyup');
    keyUpFilterInput$.pipe(
      debounceTime(500)
    ).subscribe(
      ()=>{
        this.handleFormSubmit();
      }
    )
  }

}
