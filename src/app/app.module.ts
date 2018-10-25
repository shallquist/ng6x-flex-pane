import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FlexPaneLibModule } from 'flex-pane-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FlexLayoutModule,
    FlexPaneLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
