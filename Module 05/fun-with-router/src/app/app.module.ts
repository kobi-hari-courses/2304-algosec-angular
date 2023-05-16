import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageAComponent } from './components/pages/page-a/page-a.component';
import { PageBComponent } from './components/pages/page-b/page-b.component';
import { PageCComponent } from './components/pages/page-c/page-c.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
