import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
