import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RequestPokeApiService } from './services/request-poke-api.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  allPokes:Array<any> = [];
  @ViewChild("section") section!: ElementRef;
  start:number = 1;
  end:number = 16;

  constructor(private requestApi: RequestPokeApiService) { }

  

  ngOnInit(): void {
    
    for(let i = this.start; i<this.end; i++){
      this.requestApi.getPokemons(i)
      .subscribe((data:any) => {
          this.allPokes.push(data);
      });
    }
    
  }

  prevPage(){
    
    if(this.start<=1){
      alert('No hay pokemons mas atras');
    }else{
      
      this.start -= 15;
      this.end -= 15;

      this.allPokes = [];
      for(let i = this.start; i<this.end; i++){
        this.requestApi.getPokemons(i)
        .subscribe((data:any) => {
            
            this.allPokes.push(data);
        });
      }
    }
    
  }

  nextPage(){
    this.section.nativeElement.innerHTML = ``;
    if(this.end >= 151){
      alert('Estos son los ultimos pokemon');
    }else{

      this.start += 15;
      this.end += 15;
      this.allPokes = [];
      for(let i = this.start; i<this.end; i++){
        this.requestApi.getPokemons(i)
        .subscribe((data:any) => {
            this.allPokes.push(data);
        });
      }
    }
    

  }
}
