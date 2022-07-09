import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import {FormsModule} from "@angular/forms";
import { MyComponent } from './my/my.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    MyComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
