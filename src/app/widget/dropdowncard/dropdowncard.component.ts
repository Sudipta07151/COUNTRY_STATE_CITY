import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdowncard',
  templateUrl: './dropdowncard.component.html',
  styleUrls: ['./dropdowncard.component.css']
})
export class DropdowncardComponent implements OnInit {
  @Input() dropdownvalues:any;
  formGroup: FormGroup;
  @Output() dropdownvaluesEmit: EventEmitter<Event>=new EventEmitter();

  constructor() { 
    this.formGroup=new FormGroup({
      'dropdown': new FormControl()
    })
  }
  ngOnInit(): void {
  }
  handleOnChange(e:any){
    console.log(e);
    if(this.formGroup.status=='VALID'){
      console.log(this.formGroup)
      const dropdownValueSelected=this.formGroup.get('dropdown')!.value;
      console.log(dropdownValueSelected);
      this.dropdownvaluesEmit.emit(dropdownValueSelected);
    }
  }
}
