import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import {SpeechRecognitionService} from './shared/shared.service';
import { TestComponent } from './test/test.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SpeechRecognitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
