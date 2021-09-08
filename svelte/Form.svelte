<script>
  const movies = [
    {
      name: "Avengers",
      quantity: 0,
      available: 3,
    },
    {
      name: "Terminator",
      quantity: 0,
      available: 5,
    },
  ];
</script>

{#each movies as movie}
  <form>
    <h3>{movie.name}</h3>
    <button type="button" on:click={() => movie.quantity -= 1} disabled={movie.quantity <= 0}>-</button>
    {movie.quantity}
    <button type="button" on:click={() => movie.quantity += 1} disabled={movie.quantity >= movie.available}>+</button>
  </form>
{/each}