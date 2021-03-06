import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BookIndexComponent } from './components/book-index/book-index.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http'
import {MatCardModule} from "@angular/material/card";
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterIndexComponent } from './components/character-index/character-index.component';
import { HouseIndexComponent } from './components/house-index/house-index.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookIndexComponent,
    BookDetailsComponent,
    CharacterDetailsComponent,
    CharacterIndexComponent,
    HouseIndexComponent,
    HouseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
