import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Services
import { CommonService } from './services/common.service';

// App Component
import { AppComponent } from './components/app/app.component';

// Components
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [
    CommonService
  ],
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class NgCalculatorModule { }

// enableProdMode();
platformBrowserDynamic().bootstrapModule(NgCalculatorModule);
