import React from "react";
import Form from "./form";
import { Title } from "./Title";
import { Theme } from "./Theme";

const movies = [
  {
    name: "Avengers",
    available: 5
  },
  {
    name: "Terminator",
    available: 3
  }
];

export default function App() {
  return (
    <Theme>
      <Title>Peliculas</Title>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </Theme>
  );
}
