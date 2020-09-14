import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { BooksTableComponent } from './components/books-table/books-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardComponent,
    HeroesListComponent,
    BooksTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
