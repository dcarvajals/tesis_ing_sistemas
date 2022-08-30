import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AppComponent} from "./app.component";
import {MaincomponentComponent} from "./components/maincomponent/maincomponent.component";
import {CompilerComponent} from "./components/compiler/compiler.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: MaincomponentComponent,
      children: [
        {path: '', component: MainComponent}
      ]},
    {path: 'compiler', component: CompilerComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
