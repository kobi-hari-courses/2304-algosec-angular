import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoDestroyComponent } from './components/demo-destroy/demo-destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoDestroyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
