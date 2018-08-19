import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";

import { routing }        from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AutofocusDirective} from './directive/autofocus.directive';
import { AuthguardService }  from './services/authguard/authguard.service';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { SpreadComponent } from './spread/spread.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutofocusDirective,
    HomeComponent,
    AccountComponent,
    SpreadComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,                             
    ReactiveFormsModule ,
    routing,
	SpreadSheetsModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
