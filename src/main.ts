import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';

// Services
import { CommonService } from './services/common.service';

// App Component
import { AppComponent } from './components/app/app.component';

// Components
import { NumberButtonComponent } from './components/number.button/number.button.component';
import { EvalButtonComponent } from './components/eval.button/eval.button.component';
import { TextComponent } from './components/text/text.component';

// For states
import { rootReducer } from './states/root.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentStore()
  ],
  providers: [
    CommonService
  ],
  declarations: [
    AppComponent,
    NumberButtonComponent,
    EvalButtonComponent,
    TextComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
