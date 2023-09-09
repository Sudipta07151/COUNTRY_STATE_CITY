import { ChangeDetectorRef, Component,Renderer2,ElementRef,ViewChild } from '@angular/core';
import { LoaderstateService } from './state/loaderstate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoader: boolean=true;
  @ViewChild('divWrapper', { static: false }) divWrapper!: ElementRef;

  constructor(
    private loaderstateService:LoaderstateService,
    private renderer:Renderer2,
    private cdr:ChangeDetectorRef
    ){
  }
  ngOnInit(){
    this.loaderstateService.loaderSubject$.subscribe(
      (data:boolean)=>{
        this.showLoader=data
      }
    )
  }
  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
  title = 'angularhttpproject';
}
