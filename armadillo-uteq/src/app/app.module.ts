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
import {FormsModule} from "@angular/forms";
import {PrettyJsonPipe} from "./models/PrettyJsonPipe";

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainComponent,
    CompilerComponent,
    MaincomponentComponent,
    PrettyJsonPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        SplitterModule,
        EditorModule,
        TooltipModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
