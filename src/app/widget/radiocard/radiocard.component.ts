import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-radiocard',
  templateUrl: './radiocard.component.html',
  styleUrls: ['./radiocard.component.css']
})
export class RadiocardComponent implements OnInit {
  formGroup!: FormGroup;
  @Input() radioInputList!:any;
  @Output() handleClickRadioEvent:EventEmitter<Event>=new EventEmitter()
  
  constructor(private fb:FormBuilder) { 
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      radiocheck: [this.radioInputList[0].value, Validators.required]
    });
  }

  handleClickRadio(){
    if(this.formGroup.status=='VALID'){
      const radioSelected=this.formGroup.get('radiocheck')!.value
      this.handleClickRadioEvent.emit(radioSelected)
    }
  }
}
