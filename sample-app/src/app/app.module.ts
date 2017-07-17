import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule, MdGridListModule, MdInputModule, MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WebserviceService } from './webservice.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdDatepickerModule, 
    MdNativeDateModule,
    MdGridListModule,
    MdInputModule,
    MdCardModule
  ],
  providers: [WebserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
