import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestPokeApiService {

  baseUrl:string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemons(pokeNumber:number){
    return this.http.get(this.baseUrl+pokeNumber);
  }
}
