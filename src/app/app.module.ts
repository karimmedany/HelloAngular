import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';



import { AppRouterModule } from './app-router.module';
import { HomeComponent } from './views/home/home.component';

import { SignupComponent } from './views/auth/signup/signup.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { NavComponent } from './views/share/nav/nav.component';




import{
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';
import { AddItemComponent } from './views/items/add-item/add-item.component';
import { AllItemsComponent } from './views/items/all-items/all-items.component';
import { FormsModule } from '@angular/forms';

// servces
import { ItemService } from './services/item.service';
import {Utility} from './services/utility.service';
import { HttpModule, Http } from '@angular/http';


import { registerLocaleData } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, MissingTranslationHandler } from 'ng2-translate';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    NavComponent,
    AddItemComponent,
    AllItemsComponent
  ],
  imports: [

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,

    FormsModule,
HttpModule,
    BrowserModule,
    AppRouterModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
    
  ],
  providers: [
    ItemService,
    Utility
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
