import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokedexService } from './services/pokedex.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea19';
  data:any[] = [];
  searchTerm!:string;
  pokemons:any[]=[];

  constructor(private pokedex:PokedexService){}

  ngOnInit():void{
    this.getPokemons()
  }
  searchPokemon() {
    this.data = this.data.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
               pokemon.orden.toString().includes(this.searchTerm);
    });
}
resetSearch() {
  this.data = [...this.pokemons]; // o this.getPokemons() si prefieres volver a hacer la petición a la API
  this.searchTerm = "";
}

    
getPokemons(){
  let pokemonData;
  for(let i = 1; i < 150; i++){
      this.pokedex.getPokemon(String(i)).subscribe(
          res => {
              pokemonData = {
                  position: i,
                  image: res.sprites.front_default,
                  name: res.name,
                  orden: res.order
              }
              this.data.push(pokemonData)
              this.pokemons = [...this.data];
          },
          err => {
          }
      )
  }
}}
