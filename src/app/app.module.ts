import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UsercardwidgetComponent } from './widget/usercardwidget/usercardwidget.component';
import { HttpClientModule } from '@angular/common/http';
import { CountrycardComponent } from './widget/countrycard/countrycard.component';
import { UsershomeComponent } from './component/usershome/usershome.component';
import { CountryhomeComponent } from './component/countryhome/countryhome.component';
import { FiltercardComponent } from './widget/filtercard/filtercard.component';
import { StatehomeComponent } from './component/statehome/statehome.component';
import { StatecardComponent } from './widget/statecard/statecard.component';
import { DropdowncardComponent } from './widget/dropdowncard/dropdowncard.component';
import { StateofcountriesComponent } from './component/stateofcountries/stateofcountries.component';
import { RadiocardComponent } from './widget/radiocard/radiocard.component';
import { StatebycountrycardComponent } from './widget/statebycountrycard/statebycountrycard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsercardwidgetComponent,
    CountrycardComponent,
    UsershomeComponent,
    CountryhomeComponent,
    FiltercardComponent,
    StatehomeComponent,
    StatecardComponent,
    DropdowncardComponent,
    StateofcountriesComponent,
    RadiocardComponent,
    StatebycountrycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
