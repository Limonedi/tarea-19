import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea19';
  pokemon: any;
  searchTerm!: string;

  constructor(private http: HttpClient) {}
  searchPokemon() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.searchTerm}`).subscribe((data) => {
      this.pokemon = data;
    });
  }
}
