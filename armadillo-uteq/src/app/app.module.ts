import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MainComponent } from './components/main/main.component';
import {ButtonModule} from "primeng/button";
import { CompilerComponent } from './components/compiler/compiler.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import {SplitterModule} from "primeng/splitter";
import {EditorModule} from "primeng/editor";
import {TooltipModule} from "primeng/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainComponent,
    CompilerComponent,
    MaincomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SplitterModule,
    EditorModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
