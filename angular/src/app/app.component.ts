import { Component } from "@angular/core";

type Movie = {
  name: string;
  available: number;
  quantity: number;
};

type Movies = Array<Movie>;

@Component({
  selector: "app-root",
  template: ` <h2>Peliculas</h2> `,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Peliculas";
  movies: Movies = [
    {
      name: "avengers",
      available: 3,
      quantity: 0
    },
    {
      name: "Terminator",
      available: 5,
      quantity: 0
    }
  ];

  addMovieQuantity(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );

    this.movies[movieIndex].quantity += 1;
  }
  removeMovieQuantity(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );

    this.movies[movieIndex].quantity -= 1;
  }
}
