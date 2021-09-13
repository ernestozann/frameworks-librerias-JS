import Link from "next/link";
import Form from "../components/Form";

const movies = [
  {
    name: "Avengers",
    available: 3
  },
  {
    name: "Terminator",
    available: 5
  }
];

export default function MoviePage() {
  return (
    <div>
      <Link href="/">
        <a>Atras</a>
      </Link>
      <h2>Peliculas</h2>

      {movies.map((movie) => (
        <Form key={movie.name} movie={movie} available={movie.available} />
      ))}
    </div>
  );
}
