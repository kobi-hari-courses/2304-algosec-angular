import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BlankComponent } from './components/blank/blank.component';
import { ImgDirective } from './directives/img.directive';
import { ChapionsComponent } from './components/chapions/chapions.component';
import { MouseFollowDirective } from './directives/mouse-follow.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BlankComponent,
    ImgDirective,
    ChapionsComponent,
    MouseFollowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
