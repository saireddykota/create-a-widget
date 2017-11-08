import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import{MService} from'./m.service';

@NgModule({
  declarations: [ AppComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [MService],
  bootstrap: [AppComponent]
})
export class AppModule { }
