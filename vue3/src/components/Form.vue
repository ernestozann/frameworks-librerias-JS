<template>
  <form v-for="movie in movies">
    <h3>{{ movie.name }}</h3>

    <button
      type="button"
      v-on:click="movie.quantity -= 1"
      :disabled="movie.quantity <= 0"
    >
      -
    </button>
    {{ movie.quantity }}
    <button
      type="button"
      v-on:click="movie.quantity += 1"
      :disabled="movie.quantity >= movie.available"
    >
      +
    </button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      movies: [
        {
          name: "Avengers",
          available: 3,
          quantity: 0,
        },
        {
          name: "Terminator",
          available: 5,
          quantity: 0,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
