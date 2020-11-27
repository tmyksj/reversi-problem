<template>
  <div class="container">
    <h1 class="header">
      <span class="header-term">Reversi</span>
      <span class="header-term">Problem</span>
    </h1>
    <Hr />
    <NuxtLink class="button" to="/daily">Daily Problem</NuxtLink>
    <NuxtLink class="button" to="/random">Random Problem</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.button {
  border: thin solid #063c06;
  border-radius: 0.25rem;
  color: #063c06;
  display: block;
  font-size: 1.4rem;
  margin: 1.6rem 0;
  outline: none;
  padding: 0.8rem 2rem;
  text-decoration: none;
}

.button:hover {
  background-color: #edebe9;
}

.button:focus {
  box-shadow: 0 0 0.1rem #063c06;
}

.container {
  margin-top: 4rem;
}

.header {
  color: #063c06;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 3rem;
  letter-spacing: 1px;
}

.header-term {
  display: block;
}
</style>
