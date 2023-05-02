import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';
import { AdditionService } from './services/addition.service';
import { WrongAdditionService } from './services/wrong-addition.service';
import { HistoryService } from './services/history.service';
import { PREFIX_TOKEN } from './tokens/prefix.token';
import { NOW_TOKEN } from './tokens/now.token';
import { FormatService } from './services/format.service';
import { InitService } from './services/init.service';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: WrongAdditionService,
      useClass: WrongAdditionService
    },
    {
      provide: AdditionService,
      useExisting: WrongAdditionService
    },
    {
      provide: PREFIX_TOKEN, 
      useValue: 'DEBUG'
    }, 
    {
      provide: NOW_TOKEN, 
      useFactory: (formatService: FormatService) => {
        return () => {
          console.log('Calculating NOW');
          const val = new Date();
          return formatService.format(val);  
        }
      }, 
      deps: [FormatService]
    }, 
    {
      provide: APP_INITIALIZER, 
      useFactory: (initService: InitService) => () => initService.init(), 
      deps: [InitService], 
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule {

}
