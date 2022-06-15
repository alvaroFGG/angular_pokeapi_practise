import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { RequestPokeApiService } from './list-pokemon/services/request-poke-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RequestPokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
