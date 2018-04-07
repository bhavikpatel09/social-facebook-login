import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HellojsService } from 'ngx-hellojs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ HellojsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
