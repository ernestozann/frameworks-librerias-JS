<script>
  import { form, button } from "./styles.js";

  const movies = [
    {
      name: "Avengers",
      quantity: 0,
      available: 3
    },
    {
      name: "Terminator",
      quantity: 0,
      available: 5
    }
  ];
</script>

{#each movies as movie}
  <form class="{form}">
    <h3>{movie.name}</h3>
    <button type="button" on:click={() => movie.quantity -= 1} disabled={movie.quantity <= 0} class="{button}">-</button>
    {movie.quantity}
    <button type="button" on:click={() => movie.quantity += 1} disabled={movie.quantity >= movie.available} class="{button}">+</button>
  </form>
{/each}

<style>
  /* form {
                background: var(--bg);
                color: var(--color2);
                border: 1px solid var(--color);
                font-family: "Courier New", Courier, monospace;
                margin: 0 50px 25px;
                padding: 10px 25px 25px;
                text-align: center;
                transform: scale(1);
                transition: transform 0.3s;
              }
              form:hover {
                transform: scale(1.2);
              } */

  button {
  }
  button:hover {
  }
  button[disabled] {
  }
</style>