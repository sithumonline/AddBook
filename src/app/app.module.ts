import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { LoginComponent } from './components/login/login.component';
//import { HeaderService } from './services/header/header.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardComponent,
    HeroesListComponent,
    BooksTableComponent,
    AddBookComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: HeaderService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
